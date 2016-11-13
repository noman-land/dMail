import activeMessage from './activeMessage';
import address from './address';
import messages from './messages';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  activeMessage,
  address,
  messages,
});

export default rootReducer;
