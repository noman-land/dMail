import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import EthereumOnlineBadge from './EthereumOnlineBadge';
import IpfsOnlineBadge from './IpfsOnlineBadge';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messagesLength } = this.props;
    return (
      <div className="header">
        <div className="flex align-items-center">
          <span>
            dMail
          </span>
          <span className="circle p-3 text-white m-2-l bg-green">
            {messagesLength}
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

Header.propTypes = {
  messagesLength: PropTypes.number,
};

export default connect(
  state => ({
    messagesLength: state.messages.length
  })
)(Header);
