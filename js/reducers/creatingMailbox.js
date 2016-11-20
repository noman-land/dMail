import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const creatingMailbox = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_CREATING:
      return action.payload.isCreating;
    default:
      return state;
  }
};

export default creatingMailbox;
