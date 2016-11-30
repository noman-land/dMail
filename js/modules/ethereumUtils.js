var Web3 = require('web3');
import Q from 'q';

import {
  DMAIL_ABI,
  DMAIL_BYTECODE,
  GETH_RPC_PATH,
} from './constants'

// let MyDMail;
window.MyDMail = null;

export const clearInbox = ({ from }) => {
  MyDMail.clearInbox({
    from,
    gas: 1000000
  });
};

export const fetchArchiveAddress = () => {
  return Q(MyDMail.getArchiveAddress.call());
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

export const lockAccount = (account) => {
  web3.personal.lockAccount(account);
};

export const sendMail = ({ from, messageHash, to }) => {
  const deferred = Q.defer();

  try {
    const transactionHash = makeMailbox()
      .at(to)
      .sendMail(messageHash, {
        from,
        gas: 1000000,
      });
    deferred.resolve(transactionHash);
  } catch (error) {
    deferred.reject(error);
  }
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
  MyDMail.updateArchiveAddress(newArchiveAddress, {
    from,
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
