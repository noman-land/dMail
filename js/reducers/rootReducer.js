import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  messages,
});

export default rootReducer;
