import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const activeMessage = (
  state = {
    metadata: {
      messageHash: 'QmHash',
      sender: '0x0000',
      sentDate: 0,
    },
    messageContent: {
      body: 'It shows up when there isn\'t a real one to show',
      subject: 'This is a default message',
    },
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
