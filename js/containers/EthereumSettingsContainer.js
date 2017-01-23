import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import EthereumSettings from '../components/settings/ethereum/EthereumSettings';

import {
  ethereumCreateAccount,
  ethereumGetCurrentBlock,
} from '../actions/asyncActions/ethereumAsyncActions';

import { getMessages } from '../actions/asyncActions/messageAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

export default connect(
  state => ({
    accounts: state.ethereumAccounts,
    currentBlock: state.currentBlock,
    primaryAccount: state.primaryAccount,
  }),
  {
    ethereumCreateAccount,
    ethereumGetCurrentBlock,
    getMessages,
    setPrimaryAccount,
  },
)(EthereumSettings);
