import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const draftBody = (
  state = '',
  action
) => {
  switch (action.type) {
    case ActionTypes.DRAFT_SET_BODY:
      return action.payload.body;
    default:
      return state;
  }
};

export default draftBody;
