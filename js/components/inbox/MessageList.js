import React, { Component, PropTypes } from 'react';
import MessageSnippet from './MessageSnippet';

export default class MessageList extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    const { messages, pathname, setActiveMessageSuccess } = this.props;
    return (
      <div className="message-list">
        {!messages.length ? (
          <div>
            You have no messages :)
          </div>
        ) : (
          <ul className="m-0 p-0">
            {messages.sort((a, b) => +b.metadata.sentDate - +a.metadata.sentDate)
              .map(message => (
                <MessageSnippet
                  key={message.metadataHash}
                  message={message}
                  pathname={pathname}
                  setActiveMessageSuccess={setActiveMessageSuccess}
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
  setActiveMessageSuccess: PropTypes.func.isRequired,
};
