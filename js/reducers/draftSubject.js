import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const draftSubject = (
  state = '',
  action
) => {
  switch (action.type) {
    case ActionTypes.DRAFT_SET_SUBJECT:
      return action.payload.subject;
    default:
      return state;
  }
};

export default draftSubject;
