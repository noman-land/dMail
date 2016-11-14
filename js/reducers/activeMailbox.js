import ActionTypes from '../actions/actionTypes/dMailActionTypes';

const activeMailbox = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.DMAIL_SET_ACTIVE_MAILBOX:
      return action.payload.mailbox;
    default:
      return state;
  }
};

export default activeMailbox;
