import Q from 'q';
import * as dMailUtils from '../../utils/dMailUtils';
import * as ethereumUtils from '../../utils/ethereumUtils';
import * as ipfsUtils from '../../utils/ipfsUtils';
import * as messagesUtils from '../../utils/messagesUtils';
import {
  fetchMessagesError,
  fetchMessagesStart,
  fetchMessagesSuccess,
  messageSendError,
  messageSendStart,
  messageSendSuccess,
  setActiveMessageError,
  setActiveMessageStart,
  setActiveMessageSuccess,
} from '../messagesActions';

export const sendMessage = (message, { from, to }, password) => {
  return (dispatch) => {
    dispatch(messageSendStart());

    return ethereumUtils.unlockAccount(from, password)
      .then(() => ipfsUtils.addJson(message))
      .then(messageHash => {
        console.log("Added to IPFS. Here's the message hash:", messageHash);
        return dMailUtils.sendMessage({ from, messageHash, to });
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

export const setActiveMessage = (metadataHash) => {
  return dispatch => {
    dispatch(setActiveMessageStart(metadataHash));
    console.group('Get Message:', metadataHash);
    console.time('Get Message');

    return messagesUtils.fetchMessage(metadataHash)
      .then(message => {
        console.log('Found message:', message);
        dispatch(setActiveMessageSuccess(message));
        return true;
      })
      .catch(error => {
        console.error(error);
        dispatch(setActiveMessageError(error));
        throw error;
      })
      .done(() => {
        console.timeEnd('Get Message');
        console.groupEnd('Done');
      });
  }
};

export const getMessages = (account) => {
  return dispatch => {
    dispatch(fetchMessagesStart());

    return Q.all([
      messagesUtils.fetchNewMessages(account),
      messagesUtils.fetchArchivedMessages(account),
    ])
    .spread((newMessages, archivedMessages) => {
      console.log('New messages:', newMessages);
      console.log('Archived messages:', archivedMessages);
      dispatch(fetchMessagesSuccess([...newMessages, ...archivedMessages]));
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
