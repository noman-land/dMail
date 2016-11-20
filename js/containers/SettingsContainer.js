import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Settings from '../components/settings/Settings';

import { getEthereumAccounts } from '../actions/asyncActions/ethereumAsyncActions';
import { createMailbox } from '../actions/asyncActions/mailboxAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';
import { setAddingMailbox, setActiveMailbox } from '../actions/mailboxActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
    activeMailbox: state.activeMailbox,
    addingMailbox: state.addingMailbox,
  }),
  dispatch => ({
    createMailbox(account, password) {
      dispatch(createMailbox(account, password));
    },
    ethereumGetAccounts() {
      dispatch(getEthereumAccounts());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
    setAddingMailbox(isAdding) {
      dispatch(setAddingMailbox(isAdding));
    },
    setMailbox(mailbox) {
      dispatch(setActiveMailbox(mailbox));
    },
  }),
)(Settings);
