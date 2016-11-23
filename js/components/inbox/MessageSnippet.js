import React, { Component, PropTypes } from 'react';
import moment from 'moment';

import { Link } from 'react-router';

class MessageSnippet extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const {
      message,
      setActiveMessage,
    } = this.props;

    setActiveMessage(message);
  }

  render() {
    const {
      message: {
        body,
        sender,
        messageHash,
        subject,
        timestamp,
      },
      pathname,
    } = this.props;

    const prettyDate = moment(timestamp * 1E3).format('MMM DD');

    return (
      <li className="message-snippet" onClick={this.handleClick}>
        <div className="select">
          <input type="checkbox" />
        </div>
        <Link
          className="link"
          to={`${pathname}/${messageHash}`}
        >
          <div className="sender" title={sender}>
            {sender}
          </div>
          <div className="message">
            <span className="subject">
              {subject}
            </span>
            <span className="p-1-x">
              -
            </span>
            <span className="body">
              {body}
            </span>
          </div>
          <div className="flex justify-space-between">
            <div className="attachment">
              [!]
            </div>
            <div className="timestamp">
              {prettyDate}
            </div>
          </div>
        </Link>
      </li>
    );
  }
}

MessageSnippet.propTypes = {
  message: PropTypes.object.isRequired,
  pathname: PropTypes.string.isRequired,
  setActiveMessage: PropTypes.func.isRequired,
};

export default MessageSnippet;
