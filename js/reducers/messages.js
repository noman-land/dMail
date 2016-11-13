import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const defaultState = [
  {
    subject: 'RE: Hello',
    body: 'Hello',
  }, {
    subject: 'FWD: Goodbye',
    body: 'Goodbye',
  }, {
    subject: 'An email from a friend',
    body: 'Want to hang out?',
  }, {
    subject: 'New car available',
    body: 'Come get it',
  }, {
    subject: 'FRE3 V1AGRA',
    body: 'THS NOT SPM',
  }, {
    subject: 'This is not spam',
    body: 'For real',
  }, {
    subject: 'Becky wants to talk',
    body: 'It\'s important',
  }, {
    subject: 'More definitely not spam',
    body: 'Really though',
  },
];

const messages = (
  state = defaultState,
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
