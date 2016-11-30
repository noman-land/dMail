import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import EthereumSettings from '../components/settings/ethereum/EthereumSettings';

import { ethereumCreateAccount } from '../actions/asyncActions/ethereumAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    ethereumCreateAccount() {
      dispatch(ethereumCreateAccount());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  }),
)(EthereumSettings);
