import ActionTypes from '../actions/actionTypes/ipfsActionTypes';
import { DOCKER_MACHINE_IP } from '../modules/constants';

const ipfsIpAddress = (
  state = DOCKER_MACHINE_IP,
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
