import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import ethereumActiveAccount from './ethereumActiveAccount';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  ethereumActiveAccount,
  messages,
});

export default rootReducer;
