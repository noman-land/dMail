import activeMailbox from './activeMailbox';
import activeMessage from './activeMessage';
import addingMailbox from './addingMailbox';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import creatingMailbox from './creatingMailbox';
import ethereumAccounts from './ethereumAccounts';
import messages from './messages';
import primaryAccount from './primaryAccount';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  activeMailbox,
  addingMailbox,
  creatingMailbox,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  messages,
  primaryAccount,
});

export default rootReducer;
