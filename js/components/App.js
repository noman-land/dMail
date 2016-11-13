import React, { Component } from 'react';

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

export default App;
