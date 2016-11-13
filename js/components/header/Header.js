import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import EthereumOnlineBadge from './EthereumOnlineBadge';
import IpfsOnlineBadge from './IpfsOnlineBadge';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages } = this.props;
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
          <EthereumOnlineBadge />
          <IpfsOnlineBadge />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({messages: state.messages})
)(Header);
