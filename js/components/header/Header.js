import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages, connectedToEthereum, connectedToIPFS } = this.props;
    return (
      <div className="header flex justify-space-between p-5">
        <div>
          dMail
          <span className="circle p-3 text-white m-2-l bg-green">
            {messages.length}
          </span>
        </div>
        <div className="flex">
          <div className={classNames(
            {
              'bg-green': connectedToEthereum,
              'bg-red': !connectedToEthereum,
            },
            'circle',
            'p-2',
            'text-white',
          )}>
            ETH
          </div>
          <div className={classNames(
            {
              'bg-green': connectedToIPFS,
              'bg-red': !connectedToIPFS,
            },
            'circle',
            'm-2-l',
            'p-2',
            'text-white',
          )}>
            IPFS
          </div>
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
