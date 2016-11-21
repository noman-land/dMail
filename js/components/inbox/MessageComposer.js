import React, { Component, PropTypes } from 'react';
import Trash from '../../components/icons/Trash';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.isComposing && (
      <div className="message-composer">
        <div className="message-composer-header">
          New Message
        </div>
        <div className="message-composer-body">
          body
        </div>
        <div className="message-composer-footer">
          <button className="message-composer-send-button">
            Send
          </button>
          <Trash />
        </div>
      </div>
    );
  }
}

MessageComposer.propTypes = {
  isComposing: PropTypes.bool,
};

MessageComposer.defaultProps = {
  isComposing: true,
};
