import { goOnline } from '../../utils/ipfsUtils';

import {
  goOnlineStart,
  goOnlineSuccess,
  goOnlineError,
} from '../ipfsActions';

export const ipfsGoOnline = (ipAddress) => {
  return (dispatch) => {
    dispatch(goOnlineStart());

    return goOnline(ipAddress).then(
      () => {
        dispatch(goOnlineSuccess());
      },
      error => {
        dispatch(goOnlineError(error));
      }
    ).done();
  }
};
