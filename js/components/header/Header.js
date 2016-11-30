import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

import { getMessages } from '../../actions/asyncActions/messageAsyncActions';

import EthereumOnlineBadge from './EthereumOnlineBadge';
import IpfsOnlineBadge from './IpfsOnlineBadge';

class Header extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleHeaderClick = this.handleHeaderClick.bind(this);
  }

  handleHeaderClick() {
    const { getMessages, primaryAccount } = this.props;
    getMessages(primaryAccount);
  }

  render() {
    const { messagesLength } = this.props;
    return (
      <div className="header">
        <div className="flex align-items-center">
          <Link to="/inbox" className="decoration-none" onClick={this.handleHeaderClick}>
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
  getMessages: PropTypes.func.isRequired,
  messagesLength: PropTypes.number,
  primaryAccount: PropTypes.string,
};

export default connect(
  state => ({
    messagesLength: state.messages.length,
    primaryAccount: state.primaryAccount,
  }),
  dispatch => ({
    getMessages(account) {
      dispatch(getMessages(account));
    }
  }),
)(Header);
