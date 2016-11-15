import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/mailboxActionTypes';

export const setMailbox = createAction(
  ActionTypes.MAILBOX_SET,
  mailbox => ({mailbox})
);
