export type ContractAbiMethod = {
  name: string;
  type: 'function';
};

type ContractAbiEvent = {
  name: string;
  type: 'event';
};

type ContractAbiElement = ContractAbiMethod | ContractAbiEvent;

export type Abi = ContractAbiElement[];

type MakeContractMethodHookParams = {
  abi: Abi;
  address: string;
  method: ContractAbiMethod;
};

export type ContractHookName<HN = string> = HN;

export type Hook = (...args: any[]) => any;

export type MakeContractMethodHook = (
  params: MakeContractMethodHookParams
) => Hook;

export type HooksLookup<HN extends string> = { [K in HN]: Hook };

export type UseContract<HN extends string> = (
  address: string,
  abi: Abi
) => HooksLookup<HN>;

export type MakeContractMethodHooks<HN extends string> = (
  address: string,
  abi: Abi
) => HooksLookup<HN>;
