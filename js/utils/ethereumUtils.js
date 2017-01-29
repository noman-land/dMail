var Web3 = require('web3');
import Q from 'q';

import * as dMailUtils from './dMailUtils';
import { DEFAULT_GETH_RPC_PATH } from './constants';

let web3;

export const createAccount = () => {
  return Q(web3.personal.newAccount('password'));
};

export const createContractInterface = (address, abi) => {
  return web3.eth.contract(abi).at(address);
};

export const getAccounts = () => {
  const deferred = Q.defer();
  web3.eth.getAccounts((error, accounts) => {
    if (error) {
      deferred.reject(error);
      return;
    }
    deferred.resolve(accounts);
  });
  return deferred.promise;
};

export const getBalance = (account) => {
  return web3.eth.getBalance(account).c[0];
};

export const getCoinbase = () => {
  const deferred = Q.defer();
  web3.eth.getCoinbase((error, coinbase) => {
    if (error) {
      deferred.reject(error);
      return;
    }
    deferred.resolve(coinbase);
  });
  return deferred.promise;
};

export const getCurrentBlock = () => {
  const deferred = Q.defer();

  web3.eth.getBlockNumber((err, blockNumber) => {
    if (err) {
      deferred.reject(err);
      return;
    }

    web3.eth.getBlock(blockNumber, (err, currentBlock) => {
      if (err) {
        deferred.reject(err);
        return;
      }

      deferred.resolve(currentBlock);
    });
  });

  return deferred.promise;
};

export const goOnline = () => {
  const deferred = Q.defer();

  if (typeof window.web3 !== 'undefined') {
    web3 = new Web3(window.web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider(DEFAULT_GETH_RPC_PATH));
  }

  // TODO: There must be a better way to check for online status
  web3.net.getListening((error, result) => {
    if (error) {
      deferred.reject(error);
      return;
    }

    if (result === false) {
      deferred.reject(result);
    }

    web3.version.getNetwork((error, networkId) => {
      deferred.resolve(networkId);
    });
  });

  return deferred.promise;
};

export const init = () => {
  return goOnline().then(networkId => {
    dMailUtils.createDMailInterface(networkId);
    return networkId;
  });
};

export const isMining = () => {
  return web3.eth.mining;
};

export const isOnline = () => {
  return web3.isConnected();
};

export const lockAccount = (account) => {
  web3.personal.lockAccount(account);
};

export const unlockAccount = (account, password) => {
  const deferred = Q.defer();
  web3.personal.unlockAccount(account, password, (error, result) => {
    if (error) {
      deferred.reject(error);
    } else {
      deferred.resolve(account);
    }
  });
  return deferred.promise;
};
