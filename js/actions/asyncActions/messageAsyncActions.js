import Q from 'q';
import * as dMailUtils from '../../utils/dMailUtils';
import * as ethereumUtils from '../../utils/ethereumUtils';
import * as ipfsUtils from '../../utils/ipfsUtils';
import {
  fetchMessageError,
  fetchMessageStart,
  fetchMessageSuccess,
  fetchMessagesError,
  fetchMessagesStart,
  fetchMessagesSuccess,
  sendMessageError,
  sendMessageStart,
  sendMessageSuccess,
} from '../messagesActions';
import ReceivedMessage from '../../classes/ReceivedMessage';

export const sendMessage = (message, { from, to }, password) => {
  return (dispatch) => {
    dispatch(sendMessageStart());

    return ethereumUtils.unlockAccount(from, password)
    .then(() => ipfsUtils.addJson(message))
    .then(messageHash => {
      console.log("Added to IPFS. Here's the message hash:", messageHash);
      return dMailUtils.sendMail({from, messageHash, to});
    })
    .then(transactionHash => {
      console.log("Sending mail. Here's the transaction hash:", transactionHash);
      dispatch(sendMessageSuccess(transactionHash));
      return true;
    })
    .catch(error => {
      console.log(error);
      dispatch(sendMessageError(error));
      throw error;
    })
    .done();
  }
};

export const getMessages = (account) => {
  return (dispatch) => {
    dispatch(fetchMessagesStart());

    return dMailUtils.fetchMessages(account).then(newMessages => {
      return Q.all(newMessages.map(newMessageMetadata => {
        return ipfsUtils.getJson(newMessageMetadata.messageHash).then(messageContent => {
          return new ReceivedMessage({messageContent, ...newMessageMetadata}).toJson();
        });
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

export const getMessage = (messageHash) => {
  return (dispatch) => {
    dispatch(fetchMessageStart());

    return getJson(messageHash).then(json => {
      dispatch(fetchMessageSuccess(json));
    }).catch(error => {
      console.log(error);
      dispatch(fetchMessageError(error));
    }).done();
  };
};
