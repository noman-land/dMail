import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const mailbox = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_SET:
      return action.payload.mailbox;
    default:
      return state;
  }
};

export default mailbox;
