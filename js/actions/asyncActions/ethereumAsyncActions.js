import {
  createAccount,
  getAccounts,
  init,
} from '../../modules/ethereumUtils';

import {
  createAccountError,
  createAccountStart,
  createAccountSuccess,
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

export const ethereumCreateAccount = () => {
  return (dispatch) => {
    dispatch(createAccountStart());

    return createAccount().then(
      address => {
        dispatch(createAccountSuccess(address));
        dispatch(ethereumGetAccounts());
      },
      error => {
        dispatch(createAccountError(error));
      }
    ).done();
  }
};
