import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

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
          <Link to="/inbox" className="decoration-none">
            <span className="text-black">
                dMail
            </span>
            <span className="circle p-3 text-white m-2-l bg-green">
              {messagesLength}
            </span>
          </Link>
        </div>
        <div className="flex align-items-center">
          <Link to="/settings" className="decoration-none">
            <EthereumOnlineBadge />
          </Link>
          <Link to="/settings" className="decoration-none">
            <IpfsOnlineBadge />
          </Link>
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
