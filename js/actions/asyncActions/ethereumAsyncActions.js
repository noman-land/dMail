import { goOnline } from '../../modules/ethereumUtils';

import {
  goOnlineStart,
  goOnlineSuccess,
  goOnlineError,
} from '../ethereumActions';

export const ethereumGoOnline = () => {
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
