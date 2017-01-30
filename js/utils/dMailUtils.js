import Q from 'q';
import { createContractInterface } from './ethereumUtils';

import {
  DMAIL_ABI,
  DMAIL_ADDRESS_ROPSTEN,
  DMAIL_ADDRESS_PRIVATENET,
  NETWORK_ID_PRIVATENET,
  NETWORK_ID_TESTNET,
} from './constants';

let DMailInterface;

const getDMailAddress = (networkId) => {
  if (networkId === NETWORK_ID_PRIVATENET) {
    return DMAIL_ADDRESS_PRIVATENET;
  } else if (networkId === NETWORK_ID_TESTNET) {
    return DMAIL_ADDRESS_ROPSTEN;
  }
  throw new Error(`No address found for network ID: ${networkId}. Are you sure there's a dMail contract deployed on this network?`);
};

export const createDMailInterface = networkId => {
  const dMailContractAddress = getDMailAddress(networkId);
  return DMailInterface = createContractInterface(dMailContractAddress, DMAIL_ABI);
};

export const clearInbox = (from) => {
  DMailInterface.clearInbox({
    from,
    gas: 1000000
  });
};

export const fetchArchiveAddress = (owner) => {
  return Q(DMailInterface.getArchiveAddress({
    from: owner,
  }));
};

export const fetchMail = (account) => {
  const deferred = Q.defer();
  let emails = [];
  const inboxLength = DMailInterface.getUnreadCount({
    from: account,
  });

  for (let i = 0; i < inboxLength; i++) {
    const mail = DMailInterface.getMail(i, {
      from: account,
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
