import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Goerli, Localhost } from '@usedapp/core';

import { createContractInterface } from './ethereumUtils';

import {
  DMAIL_ABI,
  DMAIL_ADDRESS_GOERLI,
  DMAIL_ADDRESS_LOCAL,
} from '../constants';

const dMailAddressLookup = {
  [Localhost.chainId]: DMAIL_ADDRESS_LOCAL,
  [Goerli.chainId]: DMAIL_ADDRESS_GOERLI,
};

export const createDMailInterface = networkId => {
  const dMailContractAddress = dMailAddressLookup[networkId];
  if (typeof dMailContractAddress === 'undefined') {
    throw new Error(
      `No address found for network ID: ${networkId}. Are you sure there's a dMail contract deployed on this network?`
    );
  }
  return (window.DMailInterface = DMailInterface =
    createContractInterface(dMailContractAddress, DMAIL_ABI));
};

export const clearInbox = from => {
  DMailInterface.clearInbox({
    from,
    gas: 1000000,
  });
};

export const fetchArchiveAddress = owner =>
  DMailInterface.getArchiveAddress({
    from: owner,
  });

export const fetchMessage = (account, index) =>
  DMailInterface.getMail(index, {
    from: account,
  });

export const fetchArchivedMail = owner =>
  fetchArchiveAddress(owner).then(archiveAddress => {
    console.log(archiveAddress);
  });

export const fetchNewMessages = account =>
  getUnreadCount(account).then(unreadCount =>
    Promise.all(
      new Array(unreadCount).fill(true).map((_, index) =>
        fetchMessage(account, index).then(
          ([sender, messageHash, sentDate]) => ({
            messageHash,
            sender,
            sentDate: sentDate.toString(),
          })
        )
      )
    )
  );

export const getUnreadCount = account =>
  DMailInterface.getUnreadCount({
    from: account,
  });

export const sendMessage = ({ from, messageHash, to }) =>
  DMailInterface.sendMessage(to, messageHash, {
    from,
    gas: 1000000,
  });

export const updateArchiveAddress = ({ from, newArchiveAddress }) => {
  DMailInterface.updateArchiveAddress(newArchiveAddress, {
    from,
    gas: 1000000,
  });
};

export const watchForArchiveAddressUpdated = () => {
  const archiveAddressUpdatedEvent = DMailInterface.ArchiveAddressUpdated();
  archiveAddressUpdatedEvent.watch((error, result) => {
    if (error) console.error(error);
  });
};

export const watchForMail = () => {
  const receivedMailEvent = DMailInterface.ReceivedMail();
  receivedMailEvent.watch((error, result) => {
    if (error) console.error(error);
  });
};

export const watchForNewMailArchived = () => {
  const newMailArchivedEvent = DMailInterface.NewMailArchived();
  newMailArchivedEvent.watch((error, result) => {
    if (error) console.error(error);
  });
};

export const DmailContext = createContext({});

export const DmailContextProvider = ({ children }) => {
  const [dmail, setDmail] = useState();

  useEffect(() => {
    if (!dmail) {
    }
  }, [dmail]);

  const value = useMemo(() => ({}), []);

  return (
    <DmailContext.Provider value={value}>{children}</DmailContext.Provider>
  );
};
