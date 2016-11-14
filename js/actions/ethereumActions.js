import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/ethereumActionTypes';

export const goOnlineError = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_ERROR
);

export const goOnlineStart = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_START
);

export const goOnlineSuccess = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_SUCCESS
);

export const fetchAccountsError = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_ERROR
);

export const fetchAccountsStart = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_START
);

export const fetchAccountsSuccess = createAction(
  ActionTypes.ETHEREUM_FETCH_ACCOUNTS_SUCCESS
);
