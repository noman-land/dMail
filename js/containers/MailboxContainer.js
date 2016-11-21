import React from 'react';
import { connect } from 'react-redux';

import Mailbox from '../components/inbox/Mailbox';

export default connect(
  state => ({
    isComposing: state.isComposing,
  }),
)(Mailbox);
