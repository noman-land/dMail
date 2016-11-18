import activeAccount from './activeAccount';
import activeMailbox from './activeMailbox';
import activeMessage from './activeMessage';
import addingMailbox from './addingMailbox';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import ethereumAccounts from './ethereumAccounts';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  activeAccount,
  activeMailbox,
  addingMailbox,
  connectedToEthereum,
  connectedToIPFS,
  ethereumAccounts,
  messages,
});

export default rootReducer;
