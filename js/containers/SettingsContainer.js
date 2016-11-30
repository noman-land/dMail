import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import Settings from '../components/settings/Settings';

import { getEthereumAccounts } from '../actions/asyncActions/ethereumAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    ethereumGetAccounts() {
      dispatch(getEthereumAccounts());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  }),
)(Settings);
