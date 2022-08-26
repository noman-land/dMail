import { Abi, HooksLookup, MakeContractMethodHook } from './EthereumTypes';

import { Contract } from '@ethersproject/contracts';
import { useCall } from '@usedapp/core';

const renameToUseHookStyle = ([first, ...rest]: string) =>
  `use${first.toUpperCase()}${rest.join('')}`;

const makeContractMethodHook: MakeContractMethodHook =
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

export const makeContractMethodHooks = (
  address: string,
  abi: Abi
): HooksLookup =>
  (abi as import('./EthereumTypes').ContractMethod[]).reduce(
    (accum: HooksLookup, method) => {
      accum[renameToUseHookStyle(method.name)] = makeContractMethodHook({
        abi,
        address,
        method,
      });
      return accum;
    },
    {}
  );
