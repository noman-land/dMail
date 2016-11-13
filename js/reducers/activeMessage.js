import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const activeMessage = (
  state = {
    subject: 'RE: Hello',
    body: 'Hello',
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_MESSAGE_SET:
      return action.payload.activeMessage;
    default:
      return state;
  }
};

export default activeMessage;
