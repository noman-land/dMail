import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';

import MessageFull from './MessageFull';
import MessageSnippet from './MessageSnippet';

class Inbox extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { activeMessage, messages } = this.props;
    return (
      <div className="inbox flex">
        <ul className="m-0 p-0">
          {messages.map(message => (
            <MessageSnippet key={Math.random()} message={message} />
          ))}
        </ul>
        <div>
          {activeMessage ? (
            <MessageFull message={activeMessage} />
          ) : (
            <div>
              No messages.
            </div>
          )}
        </div>
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
