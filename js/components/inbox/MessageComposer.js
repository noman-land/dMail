import React, { Component, PropTypes } from 'react';

export default class MessageComposer extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return this.props.isComposing && (
      <div className="message-composer">
        composing
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
