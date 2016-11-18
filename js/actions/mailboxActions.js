import { createAction } from 'redux-actions';
import ActionTypes from './actionTypes/mailboxActionTypes';

export const setActiveMailbox = createAction(
  ActionTypes.MAILBOX_SET,
  activeMailbox => ({activeMailbox})
);

export const setAddingMailbox = createAction(
  ActionTypes.MAILBOX_ADDING,
  isAdding => ({isAdding})
);
