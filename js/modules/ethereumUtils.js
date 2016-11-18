var Web3 = require('web3');
import Q from 'q';

import {
  DMAIL_ABI,
  DMAIL_BYTECODE,
  GETH_RPC_PATH,
  MY_DMAIL_ADDRESS,
} from './constants'

let activeAccount;
let MyDMail;

export const clearInbox = () => {
  MyDMail.clearInbox({
    from: activeAccount,
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

export const makeMailbox = () => {
  return web3.eth.contract(DMAIL_ABI);
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

export const lockAccount = () => {
  web3.personal.lockAccount(activeAccount);
};

export const sendMail = (mail) => {
  const RecipientDMail = makeMailbox(mail.recipient);
  RecipientDMail.sendMail(mail.messageHash, {
    from: activeAccount,
    gas: 1000000
  });
};

export const setPrimaryAccount = () => {
  activeAccount = web3.eth.accounts[0];
};

export const unlockAccount = (account, password) => {
  web3.personal.unlockAccount(account, password);
  MyEthermail = makeContract(MY_DMAIL_ADDRESS);
  activeAccount = account;
};

export const updateArchiveAddress = (newArchiveAddress) => {
  MyDMail.updateArchiveAddress(newArchiveAddress, {
    from: activeAccount,
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
