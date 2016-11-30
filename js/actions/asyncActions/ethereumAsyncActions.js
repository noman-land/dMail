import {
  getAccounts,
  init,
} from '../../modules/ethereumUtils';

import {
  fetchAccountsError,
  fetchAccountsStart,
  fetchAccountsSuccess,
  goOnlineStart,
  goOnlineSuccess,
  goOnlineError,
} from '../ethereumActions';

import { getMessages } from '../asyncActions/messageAsyncActions';

export const ethereumGoOnline = () => {
  return (dispatch) => {
    dispatch(goOnlineStart());

    return init().then(
      () => {
        dispatch(goOnlineSuccess());
        dispatch(getEthereumAccounts());
        dispatch(getMessages());
      },
      error => {
        dispatch(goOnlineError(error));
      }
    ).done();
  }
};

export const getEthereumAccounts = () => {
  return (dispatch) => {
    dispatch(fetchAccountsStart());

    return getAccounts().then(
      accounts => {
        dispatch(fetchAccountsSuccess(accounts));
      },
      error => {
        dispatch(fetchAccountsError(error));
      }
    ).done();
  }
};
