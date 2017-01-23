import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/messagesActionTypes';

export const clearActiveMessage = createAction(
  ActionTypes.ACTIVE_MESSAGE_CLEAR
);

export const composingMessage = createAction(
  ActionTypes.MESSAGE_COMPOSING,
  isComposing => ({isComposing})
);

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

export const setActiveMessage = createAction(
  ActionTypes.ACTIVE_MESSAGE_SET,
  message => ({message})
);

export const setDraftSubject = createAction(
  ActionTypes.DRAFT_SET_SUBJECT,
  subject => ({subject})
);

export const setDraftBody = createAction(
  ActionTypes.DRAFT_SET_BODY,
  body => ({body})
);

export const sendMessageError = createAction(
  ActionTypes.MESSAGE_SEND_ERROR,
  error => ({error})
);

export const sendMessageStart = createAction(
  ActionTypes.MESSAGE_SEND_START,
);

export const sendMessageSuccess = createAction(
  ActionTypes.MESSAGE_SEND_SUCCESS,
  transactionHash => ({transactionHash})
);
