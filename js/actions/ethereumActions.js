import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';

export const goOnlineStart = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_START
);

export const goOnlineSuccess = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_SUCCESS
);

export const goOnlineError = createAction(
  ActionTypes.ETHEREUM_GO_ONLINE_ERROR
);
