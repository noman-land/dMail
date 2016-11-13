import { goOnline } from '../../modules/ipfsUtils';

import {
  goOnlineStart,
  goOnlineSuccess,
  goOnlineError,
} from '../ipfsActions';

export const ipfsGoOnline = () => {
  return (dispatch) => {
    dispatch(goOnlineStart());

    return goOnline().then(
      () => {
        dispatch(goOnlineSuccess());
      },
      error => {
        dispatch(goOnlineError(error));
      }
    ).done();
  }
};
