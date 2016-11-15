import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const activeMailbox = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_SET_ACTIVE:
      return action.payload.mailbox;
    default:
      return state;
  }
};

export default activeMailbox;
