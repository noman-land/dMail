import {
  getAccounts,
  goOnline,
} from '../../modules/ethereumUtils';

import {
  fetchAccountsError,
  fetchAccountsStart,
  fetchAccountsSuccess,
  goOnlineStart,
  goOnlineSuccess,
  goOnlineError,
} from '../ethereumActions';

export const ethereumGoOnline = () => {
  return (dispatch) => {
    dispatch(goOnlineStart());

    return goOnline().then(
      () => {
        dispatch(goOnlineSuccess());
        dispatch(getEthereumAccounts());
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
