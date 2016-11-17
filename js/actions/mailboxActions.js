import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/mailboxActionTypes';

export const setMailbox = createAction(
  ActionTypes.MAILBOX_SET,
  mailbox => ({mailbox})
);

export const setAddingMailbox = createAction(
  ActionTypes.MAILBOX_ADDING,
  isAdding => ({isAdding})
);
