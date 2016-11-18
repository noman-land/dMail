import addingMailbox from './addingMailbox';
import activeMailbox from './activeMailbox';
import activeMessage from './activeMessage';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import activeAccount from './activeAccount';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  activeMailbox,
  addingMailbox,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  activeAccount,
  messages,
});

export default rootReducer;
