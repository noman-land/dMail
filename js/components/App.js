import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

import { ethereumGoOnline } from '../actions/asyncActions/ethereumAsyncActions';
import { ipfsGoOnline } from '../actions/asyncActions/ipfsAsyncActions';

import Header from './header/Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
  constructor(props, context) {
    super(props, context);
    props.ethereumGoOnline();
    props.ipfsGoOnline();
  }

  render() {
    return (
      <div className="app flex-column">
        <Header />
        <Body>
          {this.props.children}
        </Body>
        <Footer />
      </div>
    );
  }
}

App.propTypes = {
  ethereumGoOnline: PropTypes.func.isRequired,
  ipfsGoOnline: PropTypes.func.isRequired,
  router: PropTypes.object.isRequired,
};

export default withRouter(connect(
  null,
  dispatch => ({
    ethereumGoOnline: () => {
      dispatch(ethereumGoOnline());
    },
    ipfsGoOnline: () => {
      dispatch(ipfsGoOnline());
    }
  })
)(App));
