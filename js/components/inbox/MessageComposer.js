import React, { Component, PropTypes } from 'react';
import Remove from '../../components/icons/Remove';
import Trash from '../../components/icons/Trash';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleCloseClick = this.handleCloseClick.bind(this);
  }

  handleCloseClick(e) {
    e.preventDefault();
    this.props.composingMessage(false);
  }

  render() {
    return (
      <div className="message-composer">
        <div className="message-composer-header">
          <span>
            New Message
          </span>
          <a className="close" onClick={this.handleCloseClick}>
            <Remove color="#FFFFFF" />
          </a>
        </div>
        <div className="message-composer-body">
          <form>
            <label htmlFor="to">
              To
              <input type="text" name="to" />
            </label>
            <label htmlFor="from">
              From
              <input type="text" name="from" />
            </label>
            <div className="message-subject">
              <input type="text" name="subject" placeholder="Subject" />
            </div>
            <div className="message-body">
              <textarea type="text" name="body" />
            </div>
          </form>
        </div>
        <div className="message-composer-footer">
          <button className="message-composer-send-button">
            Send
          </button>
          <a className="close" onClick={this.handleCloseClick}>
            <Trash />
          </a>
        </div>
      </div>
    );
  }
}

MessageComposer.propTypes = {
  composingMessage: PropTypes.func.isRequired,
};
