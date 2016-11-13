import ActionTypes from '../actions/actionTypes/ipfsActionTypes';

const connectedToIPFS = (
  state = false,
  action
) => {
  switch (action.type) {
    case ActionTypes.IPFS_GO_ONLINE_SUCCESS:
      return true;
    case ActionTypes.IPFS_GO_ONLINE_ERROR:
      return false;
    default:
      return state;
  }
};

export default connectedToIPFS;
