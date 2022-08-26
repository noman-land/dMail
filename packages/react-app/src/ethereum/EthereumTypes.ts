export type ContractMethod = {
  name: string;
  type: 'function';
};

export type ContractEvent = {
  name: string;
  type: 'event';
};

type ContractElement = ContractMethod | ContractEvent;

export type Abi = ContractElement[];
