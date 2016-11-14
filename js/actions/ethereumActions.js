import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/ethereumActionTypes';

export const goOnlineError = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_ERROR,
  error => ({error})
);

export const goOnlineStart = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_START,
);

export const goOnlineSuccess = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_SUCCESS,
);

export const fetchAccountsError = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_ERROR,
  error => ({error})
);

export const fetchAccountsStart = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_START,
);

export const fetchAccountsSuccess = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_SUCCESS,
  accounts => ({accounts})
);

export const setActiveAccount = createAction(
  ActionTypes.ETHEREUM_SET_ACTIVE_ACCOUNT,
  account => ({account})
);
