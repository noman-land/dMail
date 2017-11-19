import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class MessageFull extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
    const {
      routeParams: { messageId },
      setActiveMessage,
    } = this.props;
    setActiveMessage(messageId);
  }

  render() {
    const {
      message: {
        metadata: {
          sender = '',
          sentDate,
        },
        messageContent: {
          body,
          subject,
        },
      },
    } = this.props;

    const timeAgo = moment(sentDate * 1E3).fromNow();
    const prettyDate = moment(sentDate * 1E3).format('LLLL');

    return (
      <div className="message-full">
        <div className="message-subject">
          {subject}
        </div>
        <div className="message-body-container">
          <div className="flex-column flex-grow-1">
            <div className="message-header">
              <div className="message-sender">
                <div className="message-sender-name">
                  Noman Land
                </div>
                <div className="message-sender-id">
                  {'<'}{sender.slice(0, 6)}{'>'}
                </div>
              </div>
              <div className="message-sent-date">
                {timeAgo} ({prettyDate})
              </div>
            </div>
            <div className="message-body">
              {body}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

MessageFull.propTypes = {
  message: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
  setActiveMessage: PropTypes.func.isRequired,
};

export default MessageFull;
