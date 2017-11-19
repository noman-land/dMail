import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const activeMessage = (
  state = {
    messageContent: {
      body: 'It shows up when there isn\'t a real one to show',
      subject: 'This is a default message',
    },
    metadata: {
      sender: '0x0000',
      sentDate: 0,
    },
    metadataHash: '',
  },
  action
) => {
  switch (action.type) {
    case ActionTypes.ACTIVE_MESSAGE_SET_SUCCESS:
      return action.payload.message;
    default:
      return state;
  }
};

export default activeMessage;
