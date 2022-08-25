let web3;

export const createAccount = () => web3.personal.newAccount('password');

export const createContractInterface = (address, abi) =>
  web3.eth.contract(abi).at(address);

export const getAccounts = () => web3.eth.getAccounts();

export const getBalance = account => web3.eth.getBalance(account);

export const getCoinbase = () => web3.eth.getCoinbase();

export const getCurrentBlock = () =>
  web3.eth.getBlockNumber().then(web3.eth.getBlock);

export const isMining = () => web3.eth.mining();

export const isOnline = () => web3.isConnected();

export const lockAccount = account => web3.personal.lockAccount(account);

export const unlockAccount = (account, password) =>
  web3.personal.unlockAccount(account, password);
