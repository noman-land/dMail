import React from 'react';
import { connect } from 'react-redux';

import MessageComposer from '../components/inbox/MessageComposer';

import { composingMessage } from '../actions/messagesActions';

export default connect(
  state => ({
    isComposing: state.isComposing,
  }),
  dispatch => ({
    composingMessage(isComposing) {
      dispatch(composingMessage(isComposing));
    },
  }),
)(MessageComposer);
