import ActionTypes from '../actions/actionTypes/mailboxActionTypes';

const mailboxes = (
  state = [],
  action
) => {
  switch (action.type) {
    case ActionTypes.MAILBOX_ADD:
      return [
        ...state.mailboxes,
        action.payload.mailbox
      ];
    default:
      return state;
  }
};

export default mailboxes;
