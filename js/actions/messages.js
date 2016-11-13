import { createAction } from 'redux-actions';
import ActionTypes from './ActionTypes';

export const fetchMessagesError = createAction(
  ActionTypes.MESSAGES_FETCH_ERROR,
  error => ({error})
);
export const fetchMessagesStart = createAction(
  ActionTypes.MESSAGES_FETCH_START
);
export const fetchMessagesSuccess = createAction(
  ActionTypes.MESSAGES_FETCH_SUCCESS,
  messages => ({messages})
);

