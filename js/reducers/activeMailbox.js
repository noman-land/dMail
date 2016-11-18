import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const activeMailbox = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_SET:
      return action.payload.activeMailbox;
    default:
      return state;
  }
};

export default activeMailbox;
