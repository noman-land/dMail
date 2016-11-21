import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const activeMessage = (
  state = {
    id: 2,
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
