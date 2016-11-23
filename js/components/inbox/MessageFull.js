import React, { Component, PropTypes } from 'react';
import moment from 'moment';

class MessageFull extends Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {
  }

  render() {
    const {
      message: {
        body,
        messageHash,
        sender,
        subject,
        timestamp,
      },
    } = this.props;

    const timeAgo = moment(timestamp * 1E3).fromNow();
    const prettyDate = moment(timestamp * 1E3).format('LLLL');

    return (
      <div>
        <div>
          From: {sender}
        </div>
        <div>
          Sent: {timeAgo} ({prettyDate})
        </div>
        <div>
          Subject: {subject}
        </div>
        <div>
          Body: {body}
        </div>
      </div>
    );
  }
}

MessageFull.propTypes = {
  message: PropTypes.object.isRequired,
  routeParams: PropTypes.object.isRequired,
};

export default MessageFull;
