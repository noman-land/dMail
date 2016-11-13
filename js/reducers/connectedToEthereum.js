import ActionTypes from '../actions/actionTypes';

const connectedToEthereum = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionTypes.ETHEREUM_GO_ONLINE_SUCCESS:
      return true;
    case ActionTypes.ETHEREUM_GO_ONLINE_ERROR:
      return false;
    default:
      return state;
  }
};

export default connectedToEthereum;
