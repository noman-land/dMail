import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  connectedToEthereum,
  connectedToIPFS,
  messages,
});

export default rootReducer;
