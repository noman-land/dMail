import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const currentBlock = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.ETHEREUM_GET_CURRENT_BLOCK_SUCCESS:
      return action.payload.currentBlock;
    default:
      return state;
  }
};

export default currentBlock;
