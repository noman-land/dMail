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

export const setActiveMessageError = createAction(
  ActionTypes.ACTIVE_MESSAGE_SET_ERROR,
  error => ({error})
);

export const setActiveMessageStart = createAction(
  ActionTypes.ACTIVE_MESSAGE_SET_START,
  metadataHash => ({metadataHash})
);

export const setActiveMessageSuccess = createAction(
  ActionTypes.ACTIVE_MESSAGE_SET_SUCCESS,
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

export const messageSendError = createAction(
  ActionTypes.MESSAGE_SEND_ERROR,
  error => ({error})
);

export const messageSendStart = createAction(
  ActionTypes.MESSAGE_SEND_START,
);

export const messageSendSuccess = createAction(
  ActionTypes.MESSAGE_SEND_SUCCESS,
  transactionHash => ({transactionHash})
);
