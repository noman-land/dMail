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
        subject,
        body,
      },
    } = this.props;

    return (
      <div>
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
