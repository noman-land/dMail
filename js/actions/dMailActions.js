import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/dMailActionTypes';

export const dmailAddMailbox = createAction(
  ActionTypes.DMAIL_ADD_MAILBOX,
  mailbox => ({mailbox})
);

export const dmailSetActiveMailbox = createAction(
  ActionTypes.DMAIL_SET_ACTIVE_MAILBOX,
  mailbox => ({mailbox})
);
