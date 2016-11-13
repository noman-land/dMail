import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const messages = (
  state = [{
    subject: 'RE: Hello',
    body: 'Hello',
  }, {
    subject: 'FWD: Goodbye',
    body: 'Goodbye',
  }],
  action
) => {
  switch (action.type) {
    case ActionTypes.MESSAGES_FETCH_SUCCESS:
      return action.payload.messages;
    default:
      return state;
  }
};

export default messages;
