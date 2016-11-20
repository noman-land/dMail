import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import EthereumSettings from '../components/settings/ethereum/EthereumSettings';

import { getEthereumAccounts } from '../actions/asyncActions/ethereumAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    getEthereumAccounts() {
      dispatch(getEthereumAccounts());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  }),
)(EthereumSettings);
