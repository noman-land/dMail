import React, { PropTypes, Component } from 'react';

export default class EthereumSettings extends Component {
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
