import React from 'react';
import { connect } from 'react-redux';

import Sidebar from '../components/inbox/Sidebar';

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
)(Sidebar);
