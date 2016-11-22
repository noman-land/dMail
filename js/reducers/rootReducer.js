import activeMailbox from './activeMailbox';
import activeMessage from './activeMessage';
import addingMailbox from './addingMailbox';
import connectedToEthereum from './connectedToEthereum';
import connectedToIPFS from './connectedToIPFS';
import creatingMailbox from './creatingMailbox';
import draftBody from './draftBody';
import draftSubject from './draftSubject';
import ethereumAccounts from './ethereumAccounts';
import isComposing from './isComposing';
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
  draftBody,
  draftSubject,
  ethereumAccounts,
  isComposing,
  messages,
  primaryAccount,
});

export default rootReducer;
