import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/ethereumActionTypes';

export const createAccountError = createAction(
  ActionTypes.ETHEREUM_CREATE_ACCOUNT_ERROR,
  error => ({error})
);

export const createAccountStart = createAction(
  ActionTypes.ETHEREUM_CREATE_ACCOUNT_START,
);

export const createAccountSuccess = createAction(
  ActionTypes.ETHEREUM_CREATE_ACCOUNT_SUCCESS,
  address => ({address})
);

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

export const setPrimaryAccount = createAction(
  ActionTypes.ETHEREUM_SET_PRIMARY_ACCOUNT,
  account => ({account})
);
