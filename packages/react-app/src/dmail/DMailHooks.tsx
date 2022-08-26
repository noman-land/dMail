import { Contract } from '@ethersproject/contracts';
import { createContext, ReactNode, useMemo } from 'react';
import { Goerli, Mainnet, useCall, useNetwork } from '@usedapp/core';

import { abis } from '@dmail/contracts';

import { DMAIL_ADDRESS_GOERLI, DMAIL_ADDRESS_MAINNET } from '../constants';

type SupportedAddresses =
  | typeof DMAIL_ADDRESS_GOERLI
  | typeof DMAIL_ADDRESS_MAINNET;

type SupportedChainIds =
  | 1 // mainnet
  | 5; //goerli

type DmailAddressLookup = {
  [K in SupportedChainIds]: SupportedAddresses;
};

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

type ContractElement = {
  name: string;
  type: 'function' | 'event';
};

type Abi = ContractElement[];

const renameToUseHookStyle = ([first, ...rest]: string) =>
  `use${first.toUpperCase()}${rest.join('')}`;

type MakeHookParams = {
  abi: Abi;
  address: string;
  method: ContractElement;
};

type Hook = (...args: any[]) => any;

type MakeHook = (params: MakeHookParams) => Hook;

const makeHook: MakeHook =
  ({ abi, address, method }) =>
  (...args) => {
    const { value, error } =
      useCall(
        address && {
          contract: new Contract(address, abi),
          method: method.name,
          args,
        }
      ) ?? {};
    if (error) {
      console.error(error.message);
      return undefined;
    }
    return value?.[0];
  };

const makeContractMethodHooks = (address: string, abi: Abi): HooksLookup =>
  abi.reduce((accum: HooksLookup, method) => {
    accum[renameToUseHookStyle(method.name)] = makeHook({
      abi,
      address,
      method,
    });
    return accum;
  }, {});

type HooksLookup = { [K: string]: Hook };

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

type DmailContextValue = {
  unreadCount: number;
};

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
