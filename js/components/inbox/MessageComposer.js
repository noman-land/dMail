import React, { Component, PropTypes } from 'react';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.isComposing && (
      <div className="message-composer">
        <div className="message-composer-header">
          header
        </div>
        <div className="message-composer-body">
          body
        </div>
        <div className="message-composer-footer">
          footer
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
