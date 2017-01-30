import React, { Component, PropTypes } from 'react';
import MessageSnippet from './MessageSnippet';

export default class MessageList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages, pathname, setActiveMessage } = this.props;
    return (
      <div className="message-list">
        {!messages.length ? (
          <div>
            You have no messages :)
          </div>
        ) : (
          <ul className="m-0 p-0">
            {messages.sort((a, b) => +b.timestamp - +a.timestamp)
              .map(message => (
                <MessageSnippet
                  key={message.messageHash}
                  message={message}
                  pathname={pathname}
                  setActiveMessage={setActiveMessage}
                />
              ))
            }
          </ul>
        )}
      </div>
    );
  }
}

MessageList.propTypes = {
  messages: PropTypes.arrayOf(PropTypes.object).isRequired,
  pathname: PropTypes.string.isRequired,
  setActiveMessage: PropTypes.func.isRequired,
};
