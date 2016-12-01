import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { ethereumGoOnline } from '../actions/asyncActions/ethereumAsyncActions';
import { ipfsGoOnline } from '../actions/asyncActions/ipfsAsyncActions';
import { getMessages } from '../actions/asyncActions/messageAsyncActions';

import { setPrimaryAccount } from '../actions/ethereumActions';

import { getCoinbase } from '../modules/ethereumUtils';

const ethereumUtils = require('../modules/ethereumUtils');
window.dMail = {...window.dMail, ethereumUtils};

import Body from './Body';
import Header from './header/Header';
import Footer from './Footer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    props.ethereumGoOnline();
    props.ipfsGoOnline();
  }

  componentDidMount() {
    const {
      primaryAccount,
      setPrimaryAccount,
    } = this.props;

    const storedPrimaryAccount = localStorage.getItem('primaryAccount');

    if (storedPrimaryAccount) {
      setPrimaryAccount(storedPrimaryAccount);
    } else if (!primaryAccount) {
      getCoinbase().then((account) => {
        setPrimaryAccount(account);
        localStorage.setItem('primaryAccount', account);
      });
    }
  }

  render() {
    const { children } = this.props;

    return (
      <div className="app flex-column">
        <Header />
        <Body>
          {children}
        </Body>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  ethereumGoOnline: PropTypes.func.isRequired,
  getMessages: PropTypes.func.isRequired,
  ipfsGoOnline: PropTypes.func.isRequired,
  primaryAccount: PropTypes.string,
  setPrimaryAccount: PropTypes.func.isRequired,
};

export default withRouter(connect(
  null,
  dispatch => ({
    ethereumGoOnline() {
      dispatch(ethereumGoOnline());
    },
    getMessages() {
      dispatch(getMessages());
    },
    ipfsGoOnline() {
      dispatch(ipfsGoOnline());
    },
    setPrimaryAccount(account) {
      dispatch(setPrimaryAccount(account));
    },
  })
)(App));
