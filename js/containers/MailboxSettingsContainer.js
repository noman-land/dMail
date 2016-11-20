import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import MailboxSettings from '../components/settings/mailbox/MailboxSettings';

import { createMailbox } from '../actions/asyncActions/mailboxAsyncActions';

import { setAddingMailbox, setActiveMailbox } from '../actions/mailboxActions';

export default connect(
  state => ({
    activeMailbox: state.activeMailbox,
    addingMailbox: state.addingMailbox,
    creatingMailbox: state.creatingMailbox,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    createMailbox(account, password) {
      dispatch(createMailbox(account, password));
    },
    setAddingMailbox(isAdding) {
      dispatch(setAddingMailbox(isAdding));
    },
    setMailbox(mailbox) {
      dispatch(setActiveMailbox(mailbox));
    },
  }),
)(MailboxSettings);
