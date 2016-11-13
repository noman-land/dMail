import React, { Component, PropTypes } from 'react';
import { withRouter } from 'react-router';

import Header from './Header';
import Body from './Body';
import Footer from './Footer';

class App extends Component {
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
  router: PropTypes.object.isRequired,
};

export default withRouter(App);
