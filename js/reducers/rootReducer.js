import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import currentBlock from './currentBlock';
import draftBody from './draftBody';
import draftSubject from './draftSubject';
import ethereumAccounts from './ethereumAccounts';
import ipfsIpAddress from './ipfsIpAddress';
import isComposing from './isComposing';
import messages from './messages';
import primaryAccount from './primaryAccount';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  connectedToEthereum,
  connectedToIPFS,
  currentBlock,
  draftBody,
  draftSubject,
  ethereumAccounts,
  ipfsIpAddress,
  isComposing,
  messages,
  primaryAccount,
});

export default rootReducer;
