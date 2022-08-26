import { DMAIL_ADDRESS_GOERLI, DMAIL_ADDRESS_MAINNET } from '../constants';

export type SupportedAddresses =
  | typeof DMAIL_ADDRESS_GOERLI
  | typeof DMAIL_ADDRESS_MAINNET;

export type SupportedChainIds =
  | 1 // mainnet
  | 5; //goerli

export type DmailAddressLookup = {
  [K in SupportedChainIds]: SupportedAddresses;
};

export type DmailContextValue = {
  unreadCount: number;
};
