import Q from 'q';
import * as dMailUtils from '../../utils/dMailUtils';
import * as ethereumUtils from '../../utils/ethereumUtils';
import * as ipfsUtils from '../../utils/ipfsUtils';
import {
  fetchMessagesError,
  fetchMessagesStart,
  fetchMessagesSuccess,
  messageSendError,
  messageSendStart,
  messageSendSuccess,
} from '../messagesActions';

export const sendMessage = (message, password) => {
  return (dispatch) => {
    dispatch(messageSendStart());

    return ethereumUtils.unlockAccount(message.from, password)
    .then(() => ipfsUtils.addJson(message))
    .then(messageHash => {
      console.log("Added to IPFS. Here's the message hash: ", messageHash);
      return dMailUtils.sendMail({
        from: message.from,
        messageHash,
        to: message.to
      });
    })
    .then(transactionHash => {
      console.log("Sending mail. Here's the transaction hash:", transactionHash);
      dispatch(messageSendSuccess(transactionHash));
      return true;
    })
    .catch(error => {
      console.log(error);
      dispatch(messageSendError(error));
      throw error;
    })
    .done();
  }
};

export const getMessages = (account) => {
  return (dispatch) => {
    dispatch(fetchMessagesStart());

    return dMailUtils.fetchMail(account)
    .then(messages => {
      return Q.all(messages.map(message => {
        return ipfsUtils.getJson(message.messageHash)
        .then(json => ({
          ...message,
          ...json,
        }));
      }));
    })
    .then(decodedMessages => {
      console.log('Messages found:', decodedMessages);
      dispatch(fetchMessagesSuccess(decodedMessages));
      return true;
    })
    .catch(error => {
      console.error(error);
      dispatch(fetchMessagesError(error));
      throw error;
    })
    .done();
  };
};
