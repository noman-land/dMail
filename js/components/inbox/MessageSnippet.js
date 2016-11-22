import React, { Component, PropTypes } from 'react';
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
        messageHash,
        subject,
        timestamp,
      },
      pathname,
    } = this.props;

    return (
      <li className="message-snippet" onClick={this.handleClick}>
        <Link to={`${pathname}/${messageHash}`} className="decoration-none text-black">
          {subject}: {body} ({timestamp})
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
