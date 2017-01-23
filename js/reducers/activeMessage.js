import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const activeMessage = (
  state = {
    body: 'It shows up when there isn\'t a real one to show',
    id: 2,
    sender: '0x0000',
    subject: 'This is a default message',
    timestamp: 0,
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_MESSAGE_SET:
    case ActionTypes.MESSAGE_FETCH_SUCCESS:
      return action.payload.message;
    default:
      return state;
  }
};

export default activeMessage;
