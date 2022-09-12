import { createContext, ReactNode, useMemo } from 'react';
import { Goerli, Mainnet, TransactionStatus, useNetwork } from '@usedapp/core';

import { abis } from '@dmail/contracts';

import { DMAIL_ADDRESS_GOERLI, DMAIL_ADDRESS_MAINNET } from '../constants';
import {
  DmailAddressLookup,
  DmailHookNames,
  SupportedChainIds,
} from './DmailTypes';
import { useContract } from '../ethereum/EthereumHooks';
import { HooksLookup } from '../ethereum/EthereumTypes';

const dmailAddressLookup = {
  [Mainnet.chainId]: DMAIL_ADDRESS_MAINNET,
  [Goerli.chainId]: DMAIL_ADDRESS_GOERLI,
} as DmailAddressLookup;

// export const fetchArchivedMail = owner =>
//   fetchArchiveAddress(owner).then(archiveAddress => {
//     console.log(archiveAddress);
//   });

// export const fetchNewMessages = account =>
//   getUnreadCount(account).then(unreadCount =>
//     Promise.all(
//       new Array(unreadCount).fill(true).map((_, index) =>
//         fetchMessage(account, index).then(
//           ([sender, messageHash, sentDate]) => ({
//             messageHash,
//             sender,
//             sentDate: sentDate.toString(),
//           })
//         )
//       )
//     )
//   );

// export const watchForArchiveAddressUpdated = () => {
//   const archiveAddressUpdatedEvent = DMailInterface.ArchiveAddressUpdated();
//   archiveAddressUpdatedEvent.watch((error, result) => {
//     if (error) console.error(error);
//   });
// };

// export const watchForMail = () => {
//   const receivedMailEvent = DMailInterface.ReceivedMail();
//   receivedMailEvent.watch((error, result) => {
//     if (error) console.error(error);
//   });
// };

// export const watchForNewMailArchived = () => {
//   const newMailArchivedEvent = DMailInterface.NewMailArchived();
//   newMailArchivedEvent.watch((error, result) => {
//     if (error) console.error(error);
//   });
// };

// const send = () => Promise.reject();
// const state = {};
// const events = [] as LogDescription[];
// const resetState = () => {};

const DmailContextValue: HooksLookup<DmailHookNames> = {
  useClearInbox: () => {},
  useSendMessage: () => {},
  useUpdateArchiveAddress: () => {},
  useGetArchiveAddress: () => {},
  useGetMail: () => {},
  useGetUnreadCount: () => {},
};

export const DmailContext =
  createContext<HooksLookup<DmailHookNames>>(DmailContextValue);

export const DmailContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    network: { chainId },
  } = useNetwork();

  const address = dmailAddressLookup[chainId as SupportedChainIds];
  const dmail: HooksLookup<DmailHookNames> = useContract(address, abis.dmail);
  return (
    <DmailContext.Provider value={dmail}>{children}</DmailContext.Provider>
  );
};
