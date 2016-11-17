import addingMailbox from './addingMailbox';
import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import activeAccount from './activeAccount';
import mailbox from './mailbox';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  addingMailbox,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  activeAccount,
  mailbox,
  messages,
});

export default rootReducer;
