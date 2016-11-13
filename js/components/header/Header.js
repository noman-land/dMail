import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import OnlineBadge from './OnlineBadge';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages, connectedToEthereum, connectedToIPFS } = this.props;
    return (
      <div className="header flex justify-space-between p-5">
        <div className="flex align-items-center">
          <span>
            dMail
          </span>
          <span className="circle p-3 text-white m-2-l bg-green">
            {messages.length}
          </span>
        </div>
        <div className="flex align-items-center">
          <OnlineBadge isOnline={connectedToEthereum}>
            ETH
          </OnlineBadge>
          <OnlineBadge isOnline={connectedToIPFS}>
            IPFS
          </OnlineBadge>
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    messages: state.messages,
    connectedToEthereum: state.connectedToEthereum,
    connectedToIPFS: state.connectedToIPFS,
  })
)(Header);
