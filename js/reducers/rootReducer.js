import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import address from './address';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  address,
  connectedToEthereum,
  messages,
});

export default rootReducer;
