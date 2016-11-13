import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes';

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

export const clearActiveMessage = createAction(
  ActionTypes.ACTIVE_MESSAGE_CLEAR
);
export const setActiveMessage = createAction(
  ActionTypes.ACTIVE_MESSAGE_SET,
  message => ({message})
);
