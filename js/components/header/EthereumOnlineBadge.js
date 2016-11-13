import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import OnlineBadge from './OnlineBadge';

class EthereumOnlineBadge extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { connectedToEthereum } = this.props;
    return (
      <OnlineBadge isOnline={connectedToEthereum}>
        ETH
      </OnlineBadge>
    );
  }
}

EthereumOnlineBadge.propTypes = {
  connectedToEthereum: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    connectedToEthereum: state.connectedToEthereum,
  })
)(EthereumOnlineBadge);
