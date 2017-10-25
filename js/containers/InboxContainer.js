import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import { setActiveMessageSuccess } from '../actions/messagesActions';

import MessageList from '../components/inbox/MessageList';

export default connect(
  (state, props) => ({
    messages: state.messages,
    pathname: props.location.pathname,
  }),
  {setActiveMessageSuccess}
)(MessageList);
