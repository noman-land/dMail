import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import EthereumSettings from '../components/settings/ethereum/EthereumSettings';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  }),
)(EthereumSettings);
