import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const addingMailbox = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_ADDING:
      return action.payload.isAdding;
    default:
      return state;
  }
};

export default addingMailbox;
