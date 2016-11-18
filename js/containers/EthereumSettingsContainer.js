import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import EthereumSettings from '../components/EthereumSettings';

import { ethereumGetAccounts } from '../actions/asyncActions/ethereumAsyncActions';
import { createMailbox } from '../actions/asyncActions/mailboxAsyncActions';

import { setActiveAccount } from '../actions/ethereumActions';
import { setAddingMailbox, setActiveMailbox } from '../actions/mailboxActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    activeAccount: state.activeAccount,
    activeMailbox: state.activeMailbox,
    addingMailbox: state.addingMailbox,
  }),
  dispatch => ({
    createMailbox(account, password) {
      dispatch(createMailbox(account, password));
    },
    ethereumGetAccounts() {
      dispatch(ethereumGetAccounts());
    },
    setActiveAccount(account) {
      dispatch(setActiveAccount(account));
    },
    setAddingMailbox(isAdding) {
      dispatch(setAddingMailbox(isAdding));
    },
    setMailbox(mailbox) {
      dispatch(setActiveMailbox(mailbox));
    },
  }),
)(EthereumSettings);
