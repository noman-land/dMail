import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/mailboxActionTypes';

export const addMailbox = createAction(
  ActionTypes.MAILBOX_ADD,
  mailbox => ({mailbox})
);

export const setActiveMailbox = createAction(
  ActionTypes.MAILBOX_SET_ACTIVE,
  mailbox => ({mailbox})
);
