var Web3 = require('web3');
import Q from 'q';

import {
  DMAIL_ABI,
  DMAIL_BYTECODE,
  GETH_RPC_PATH,
} from './constants'

let primaryAccount;
window.MyDMail = null;

export const clearInbox = () => {
  MyDMail.clearInbox({
    from: primaryAccount,
    gas: 1000000
  });
};

export const compileSolidityCode = (sourceString) => {
  const deferred = Q.defer();

  web3.eth.compile.solidity(sourceString, (error, result) => {
    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve(result);
    }
  });

  return deferred.promise;
};

export const deployMailbox = (address) => {
  console.log('Deploying...');
  const deferred = Q.defer();

  makeMailbox().new({
    data: DMAIL_BYTECODE,
    gas: 1000000,
    from: address,
  }, (error, myContract) => {
    MyDMail = myContract;
    // NOTE: The callback will fire twice!
    // Once the contract has the transactionHash property set and once its deployed on an address.
    // e.g. check tx hash on the first call (transaction send)
    if (error) {
      deferred.reject(error);
      return;
    }

    if (!myContract.address) {
      console.log('Transaction hash:', myContract.transactionHash);
    } else {
      localStorage.setItem('mailbox', myContract.address);
      deferred.resolve(myContract.address)
    }
  });
  return deferred.promise;
};

export const fetchArchiveAddress = () => {
  return Q(MyDMail.getArchiveAddress.call());
};

export const fetchExistingMailbox = () => {
  const savedMailbox = window.localStorage.getItem('mailbox');
  if (savedMailbox) {
    MyDMail = makeMailbox().at(savedMailbox);
  }
  return savedMailbox;
};

export const fetchMail = () => {
  const inboxLength = MyDMail.getInboxLength.call();
  let emails = [];

  for (let i = 0; i < inboxLength; i++) {
    const mail = MyDMail.getMail(i);
    emails.push({
      sender: mail[0],
      messageHash: mail[1],
      timestamp: mail[2].toString(),
    });
  }

  return Q(emails);
};

export const goOnline = () => {
  const deferred = Q.defer();

  if (typeof window.web3 !== 'undefined') {
    window.web3 = new Web3(window.web3.currentProvider);
  } else {
    window.web3 = new Web3(new Web3.providers.HttpProvider(GETH_RPC_PATH));
  }

  window.web3.net.getListening((error, result) => {
    if (error) {
      deferred.reject(error);
      return;
    }

    deferred.resolve(result);
  });

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

export const isMining = () => {
  return web3.eth.mining;
};

export const isOnline = () => {
  return web3.isConnected();
};

export const lockAccount = () => {
  web3.personal.lockAccount(primaryAccount);
};

export const makeMailbox = () => {
  return web3.eth.contract(DMAIL_ABI);
};

export const sendMail = (mail) => {
  const RecipientDMail = makeMailbox(mail.recipient);
  RecipientDMail.sendMail(mail.messageHash, {
    from: primaryAccount,
    gas: 1000000
  });
};

export const setPrimaryAccount = (account) => {
  primaryAccount = account;
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

export const updateArchiveAddress = (newArchiveAddress) => {
  MyDMail.updateArchiveAddress(newArchiveAddress, {
    from: primaryAccount,
    gas: 1000000
  });
};

export const watchForArchiveAddressUpdated = () => {
  const archiveAddressUpdatedEvent = MyDMail.ArchiveAddressUpdated();
  archiveAddressUpdatedEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};

export const watchForMail = () => {
  const receivedMailEvent = MyDMail.ReceivedMail();
  receivedMailEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};

export const watchForNewMailArchived = () => {
  const newMailArchivedEvent = MyDMail.NewMailArchived();
  newMailArchivedEvent.watch(function(error, result) {
    if (error) console.error(error);
  })
};
