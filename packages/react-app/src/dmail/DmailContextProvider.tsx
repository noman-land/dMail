import { createContext, ReactNode, useMemo } from 'react';
import { Goerli, Mainnet, useNetwork } from '@usedapp/core';

import { abis } from '@dmail/contracts';

import { DMAIL_ADDRESS_GOERLI, DMAIL_ADDRESS_MAINNET } from '../constants';
import {
  DmailAddressLookup,
  DmailContextValue,
  SupportedChainIds,
} from './DmailTypes';
import { Abi, HooksLookup } from '../ethereum/EthereumTypes';
import { makeContractMethodHooks } from '../ethereum/EthereumUtils';

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

const useContract = (address: string, abi: Abi): HooksLookup =>
  useMemo(
    () =>
      makeContractMethodHooks(
        address,
        abi.filter(m => m.type === 'function')
      ),
    [address, abi]
  );

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

export const DmailContext = createContext<DmailContextValue>({
  unreadCount: 0,
});

export const DmailContextProvider = ({ children }: { children: ReactNode }) => {
  const {
    network: { chainId },
  } = useNetwork();

  const { useGetUnreadCount } = useContract(
    dmailAddressLookup[chainId as SupportedChainIds],
    abis.dmail
  );

  const unreadCount = useGetUnreadCount()?.toNumber();

  const value = useMemo(
    () => ({
      unreadCount,
    }),
    [unreadCount]
  );

  return (
    <DmailContext.Provider value={value}>{children}</DmailContext.Provider>
  );
};
