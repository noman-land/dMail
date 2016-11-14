import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const mailboxes = (
  state = [],
  action
) => {
  switch (action.type) {
    case ActionTypes.DMAIL_ADD_MAILBOX:
      return [
        ...state.mailboxes,
        action.payload.mailbox
      ];
    default:
      return state;
  }
};

export default mailboxes;
