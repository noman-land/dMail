import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const defaultState = [
  {
    id: 1,
    subject: 'RE: Hello',
    body: 'Hello',
  }, {
    id: 2,
    subject: 'FWD: Goodbye',
    body: 'Goodbye',
  }, {
    id: 3,
    subject: 'An email from a friend',
    body: 'Want to hang out?',
  }, {
    id: 4,
    subject: 'New car available',
    body: 'Come get it',
  }, {
    id: 5,
    subject: 'FRE3 V1AGRA',
    body: 'THS NOT SPM',
  }, {
    id: 6,
    subject: 'This is not spam',
    body: 'For real',
  }, {
    id: 7,
    subject: 'Becky wants to talk',
    body: 'It\'s important',
  }, {
    id: 8,
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
