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
        dispatch(ethereumGetAccounts());
        dispatch(getMessages());
      },
      error => {
        dispatch(goOnlineError(error));
      }
    ).done();
  }
};

export const ethereumGetAccounts = () => {
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
