export type ContractMethod = {
  name: string;
  type: 'function';
};

type ContractEvent = {
  name: string;
  type: 'event';
};

type ContractElement = ContractMethod | ContractEvent;

export type Abi = ContractElement[];

type MakeContractMethodHookParams = {
  abi: Abi;
  address: string;
  method: ContractMethod;
};

type Hook = (...args: any[]) => any;

export type MakeContractMethodHook = (
  params: MakeContractMethodHookParams
) => Hook;

export type HooksLookup = { [K: string]: Hook };
