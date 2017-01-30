import React from 'react';
import { connect } from 'react-redux';

import MessageComposer from '../components/inbox/MessageComposer';

import { sendMessage } from '../actions/asyncActions/messageAsyncActions';

import {
  composingMessage,
  setDraftBody,
  setDraftSubject,
} from '../actions/messagesActions';

export default connect(
  state => ({
    draftBody: state.draftBody,
    draftSubject: state.draftSubject,
    isComposing: state.isComposing,
    primaryAccount: state.primaryAccount,
  }),
  {
    composingMessage,
    sendMessage,
    setDraftBody,
    setDraftSubject
  },
)(MessageComposer);
