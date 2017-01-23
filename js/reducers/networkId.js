import ActionTypes from '../actions/actionTypes/ethereumActionTypes';

const networkId = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.ETHEREUM_UPDATE_NETWORK_ID:
      return action.payload.networkId;
    default:
      return state;
  }
};

export default networkId;
