import { deployMailbox, unlockAccount } from '../../modules/ethereumUtils';
import { creatingMailbox, setActiveMailbox } from '../mailboxActions';

export const createMailbox = (account, password) => {
  return (dispatch) => {
    dispatch(creatingMailbox(true));
    return unlockAccount(account, password)
      .then(deployMailbox)
      .then(contractAddress => {
        console.log('Deployed! Your dMail address is:', contractAddress);
        dispatch(setActiveMailbox(contractAddress));
      }).done(() => {
        dispatch(creatingMailbox(false));
      });
  }
};
