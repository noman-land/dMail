import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/ipfsActionTypes';

export const goOnlineStart = createAction(
  ActionTypes.IPFS_GO_ONLINE_START
);

export const goOnlineSuccess = createAction(
  ActionTypes.IPFS_GO_ONLINE_SUCCESS
);

export const goOnlineError = createAction(
  ActionTypes.IPFS_GO_ONLINE_ERROR
);
