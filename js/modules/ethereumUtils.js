var Web3 = require('web3');
import Q from 'q';

import {
  DMAIL_ABI,
  DMAIL_ADDRESS_ROPSTEN,
  DMAIL_ADDRESS_PRIVATENET,
  DEFAULT_GETH_RPC_PATH,
  NETWORK_ID_PRIVATENET,
  NETWORK_ID_TESTNET,
} from './constants';

let DMailInterface;
let web3;

const createDMailInterface = (networkId => {
  let dMailAddress;

  if (networkId === NETWORK_ID_PRIVATENET) {
    dMailAddress = DMAIL_ADDRESS_PRIVATENET;
  } else if (networkId === NETWORK_ID_TESTNET) {
    dMailAddress = DMAIL_ADDRESS_ROPSTEN;
  }

  DMailInterface = web3.eth.contract(DMAIL_ABI).at(dMailAddress);
  window.dMail = {...window.dMail, web3, DMailInterface};
  return DMailInterface;
});

export const clearInbox = (from) => {
  DMailInterface.clearInbox({
    from,
    gas: 1000000
  });
};

export const createAccount = () => {
  return Q(web3.personal.newAccount('password'));
};

export const fetchArchiveAddress = (owner) => {
  return Q(DMailInterface.getArchiveAddress({
    from: owner,
  }));
};

export const fetchMail = (owner) => {
  const deferred = Q.defer();
  let emails = [];
  const inboxLength = DMailInterface.getUnreadCount({
    from: owner,
  });

  for (let i = 0; i < inboxLength; i++) {
    const mail = DMailInterface.getMail(i, {
      from: owner,
    });
    emails.push({
      sender: mail[0],
      messageHash: mail[1],
      timestamp: mail[2].toString(),
    });
  }

  deferred.resolve(emails);
  return deferred.promise;
};

export const getAccounts = () => {
  const deferred = Q.defer();
  web3.eth.getAccounts((error, accounts) => {
    if (error) {
      deferred.reject(error);
      return;
    }
    deferred.resolve(accounts);
  });
  return deferred.promise;
};

export const getBalance = (account) => {
  return web3.eth.getBalance(account).c[0];
};

export const getCoinbase = () => {
  const deferred = Q.defer();
  web3.eth.getCoinbase((error, coinbase) => {
    if (error) {
      deferred.reject(error);
      return;
    }
    deferred.resolve(coinbase);
  });
  return deferred.promise;
};

export const getCurrentBlock = () => {
  const deferred = Q.defer();

  web3.eth.getBlockNumber((err, blockNumber) => {
    if (err) {
      deferred.reject(err);
      return;
    }

    web3.eth.getBlock(blockNumber, (err, currentBlock) => {
      if (err) {
        deferred.reject(err);
        return;
      }

      deferred.resolve(currentBlock);
    });
  });

  return deferred.promise;
};

export const goOnline = () => {
  const deferred = Q.defer();

  if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(DEFAULT_GETH_RPC_PATH));
  }

  // TODO: There must be a better way to check for online status
  web3.net.getListening((error, result) => {
    if (error) {
      deferred.reject(error);
      return;
    }

    if (result === false) {
      deferred.reject(result);
    }

    web3.version.getNetwork((error, networkId) => {
      deferred.resolve(networkId);
    });
  });

  return deferred.promise;
};

export const init = () => {
  return goOnline().then(
    createDMailInterface,
    error => {
      throw error;
    }
  );
};

export const isMining = () => {
  return web3.eth.mining;
};

export const isOnline = () => {
  return web3.isConnected();
};

export const lockAccount = (account) => {
  web3.personal.lockAccount(account);
};

export const sendMail = ({ from, messageHash, to }) => {
  const deferred = Q.defer();
  let transactionHash;

  try {
    transactionHash = DMailInterface.sendMessage(to, messageHash, {
      from,
      gas: 1000000,
    });
  } catch (error) {
    deferred.reject(error);
  }

  deferred.resolve(transactionHash);
  return deferred.promise;
};

export const unlockAccount = (account, password) => {
  const deferred = Q.defer();
  web3.personal.unlockAccount(account, password, (error, result) => {
    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve(account);
    }
  });
  return deferred.promise;
};

export const updateArchiveAddress = ({ from, newArchiveAddress }) => {
  DMailInterface.updateArchiveAddress(newArchiveAddress, {
    from,
    gas: 1000000
  });
};

export const watchForArchiveAddressUpdated = () => {
  const archiveAddressUpdatedEvent = DMailInterface.ArchiveAddressUpdated();
  archiveAddressUpdatedEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};

export const watchForMail = () => {
  const receivedMailEvent = DMailInterface.ReceivedMail();
  receivedMailEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};

export const watchForNewMailArchived = () => {
  const newMailArchivedEvent = DMailInterface.NewMailArchived();
  newMailArchivedEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};
