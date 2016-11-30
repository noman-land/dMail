import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Settings from '../components/settings/Settings';

import { ethereumGetAccounts } from '../actions/asyncActions/ethereumAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    ethereumGetAccounts() {
      dispatch(ethereumGetAccounts());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  }),
)(Settings);
