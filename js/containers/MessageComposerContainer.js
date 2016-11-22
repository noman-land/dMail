import React from 'react';
import { connect } from 'react-redux';

import MessageComposer from '../components/inbox/MessageComposer';

import { composingMessage, setDraftBody, setDraftSubject } from '../actions/messagesActions';

export default connect(
  state => ({
    activeMailbox: state.activeMailbox,
    isComposing: state.isComposing,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    composingMessage(isComposing) {
      dispatch(composingMessage(isComposing));
    },
    setDraftBody(body) {
      dispatch(setDraftBody(body));
    },
    setDraftSubject(subject) {
      dispatch(setDraftSubject(subject));
    },
  }),
)(MessageComposer);
