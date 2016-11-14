import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import ethereumActiveAccount from './ethereumActiveAccount';
import mailboxes from './mailboxes';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  ethereumActiveAccount,
  mailboxes,
  messages,
});

export default rootReducer;
