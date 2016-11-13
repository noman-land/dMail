import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

class EthereumSettings extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="h1">
        Ethereum Settings!
      </div>
    );
  }
}

EthereumSettings.propTypes = {
  web3: PropTypes.object.isRequired
};

export default connect(
  () => {
    return {
      web3: window.web3,
    }
  }
)(EthereumSettings);
