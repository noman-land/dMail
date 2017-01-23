import ActionTypes from '../actions/actionTypes/ipfsActionTypes';
import { DEFAULT_HOSTNAME } from '../modules/constants';

const ipfsIpAddress = (
  state = DEFAULT_HOSTNAME,
  action
) => {
  switch (action.type) {
    case ActionTypes.IPFS_CHANGE_IP_ADDRESS:
      return action.payload.ipfsIpAddress;
    default:
      return state;
  }
};

export default ipfsIpAddress;
