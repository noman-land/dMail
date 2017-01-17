import ActionTypes from '../actions/actionTypes/ipfsActionTypes';
import { DEFAULT_HOST } from '../modules/constants';

const ipfsIpAddress = (
  state = DEFAULT_HOST,
  action
) => {
  switch (action.type) {
    case ActionTypes.IPFS_CHANGE_IP:
      return action.payload.ipfsIpAddress;
    default:
      return state;
  }
};

export default ipfsIpAddress;
