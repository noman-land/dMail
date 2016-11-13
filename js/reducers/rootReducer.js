import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import address from './address';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  address,
  connectedToEthereum,
  connectedToIPFS,
  messages,
});

export default rootReducer;
