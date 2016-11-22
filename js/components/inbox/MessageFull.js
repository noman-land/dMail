import React, { Component, PropTypes } from 'react';

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

    console.log(this.props.message);

    return (
      <div>
        <div>
          From: {sender}
        </div>
        <div>
          Sent at: {Date(timestamp)}
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
