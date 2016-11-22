import { sendMail, unlockAccount } from '../../modules/ethereumUtils';
import { addJson } from '../../modules/ipfsUtils';
import {
  messageSendError,
  messageSendStart,
  messageSendSuccess,
} from '../messagesActions';

export const sendMessage = ({ body, from, subject, to }, password) => {
  return (dispatch) => {
    dispatch(messageSendStart());

    return unlockAccount(from, password).then(() => {
      return addJson({ body, subject }).then(messageHash => {
        console.log('Added to IPFS. Here\'s the message hash: ', messageHash);
        return sendMail({ from, messageHash, to }).then(
          transactionHash => {
            console.log('Sending mail. Here\'s the transaction hash:', transactionHash);
            dispatch(messageSendSuccess(transactionHash));
          },
          error => {
            console.log(error);
            dispatch(messageSendError(error))
          }
        );
      });
    }).done();
  }
};
