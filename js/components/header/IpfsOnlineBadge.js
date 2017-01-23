import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import OnlineBadge from './OnlineBadge';

class IpfsOnlineBadge extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { connectedToIPFS } = this.props;
    return (
      <OnlineBadge isOnline={connectedToIPFS}>
        IPFS
      </OnlineBadge>
    );
  }
}

IpfsOnlineBadge.propTypes = {
  connectedToIPFS: PropTypes.bool.isRequired,
};

export default connect(
  state => ({
    connectedToIPFS: state.connectedToIpfs,
  })
)(IpfsOnlineBadge);
