import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import MessageList from './MessageList';
import Sidebar from './Sidebar'

class Inbox extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { activeMessage, messages } = this.props;
    return (
      <div className="inbox">
        <Sidebar />
        <MessageList messages={messages} activeMessage={activeMessage} />
      </div>
    );
  }
}

Inbox.propTypes = {
  activeMessage: PropTypes.object,
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default connect(
  state => ({
    activeMessage: state.activeMessage,
    messages: state.messages,
  })
)(Inbox);
