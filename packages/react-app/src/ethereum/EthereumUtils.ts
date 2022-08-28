import {
  Abi,
  ContractAbiMethod,
  ContractHookName,
  HooksLookup,
  MakeContractMethodHook,
  MakeContractMethodHooks,
} from './EthereumTypes';

import { Contract } from '@ethersproject/contracts';
import { useCall, useContractFunction } from '@usedapp/core';
import { useCallback } from 'react';

const renameToUseHookStyle = ([first, ...rest]: string) =>
  `use${first.toUpperCase()}${rest.join('')}`;

const makeContractMethodHook: MakeContractMethodHook =
  ({ abi, address, method }) =>
  (...args) => {
    //   console.log('address', address);
    //   return useContractFunction(new Contract(address, abi), method.name, {
    //     transactionName: `${method.name}-${Date.now}`,
    //   });
    // };

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

export const makeContractMethodHooks: MakeContractMethodHooks<
  ContractHookName
> = (address, abi) =>
  (abi as ContractAbiMethod[]).reduce(
    (accum: HooksLookup<ContractHookName>, method) => {
      accum[renameToUseHookStyle(method.name)] = makeContractMethodHook({
        abi,
        address,
        method,
      });
      return accum;
    },
    {}
  );
