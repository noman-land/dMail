import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

class Header extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages, connectedToEthereum, connectedToIPFS } = this.props;
    return (
      <div className="header flex p-5">
        dMail
        <span className="circle p-3 text-white m-2-l" style={{background: 'red'}}>
          {messages.length}
        </span>
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
