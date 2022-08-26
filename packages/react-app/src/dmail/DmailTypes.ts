import { DMAIL_ADDRESS_GOERLI, DMAIL_ADDRESS_MAINNET } from '../constants';
import { Abi, ContractMethod } from '../ethereum/EthereumTypes';

export type SupportedAddresses =
  | typeof DMAIL_ADDRESS_GOERLI
  | typeof DMAIL_ADDRESS_MAINNET;

export type SupportedChainIds =
  | 1 // mainnet
  | 5; //goerli

export type DmailAddressLookup = {
  [K in SupportedChainIds]: SupportedAddresses;
};

export type MakeContractMethodHookParams = {
  abi: Abi;
  address: string;
  method: ContractMethod;
};

type Hook = (...args: any[]) => any;

export type MakeContractMethodHook = (
  params: MakeContractMethodHookParams
) => Hook;

export type HooksLookup = { [K: string]: Hook };

export type DmailContextValue = {
  unreadCount: number;
};
