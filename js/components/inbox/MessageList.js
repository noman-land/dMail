import React, { Component, PropTypes } from 'react';
import MessageFull from './MessageFull';
import MessageSnippet from './MessageSnippet';

export default class MessageList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { activeMessage, messages } = this.props;
    return (
      <div className="message-list">
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

MessageList.propTypes = {
  activeMessage: PropTypes.string,
  messages: PropTypes.arrayOf(PropTypes.object),
};

MessageList.defaultProps = {
  activeMessage: null,
  messages: [],
};
