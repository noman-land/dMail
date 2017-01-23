import ActionTypes from '../actions/actionTypes/ipfsActionTypes';

const ipfsVersion = (
  state = null,
  action
) => {
  switch (action.type) {
    case ActionTypes.IPFS_UPDATE_VERSION:
      return action.payload.ipfsVersion;
    default:
      return state;
  }
};

export default ipfsVersion;
