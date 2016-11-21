import ActionTypes from '../actions/actionTypes/messagesActionTypes';

const isComposing = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionTypes.MESSAGE_COMPOSING:
      return action.payload.isComposing;
    default:
      return state;
  }
};

export default isComposing;
