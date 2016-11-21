import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import MessageFull from '../components/inbox/MessageFull';

export default connect(
  state => ({
    message: state.activeMessage,
  }),
)(MessageFull);
