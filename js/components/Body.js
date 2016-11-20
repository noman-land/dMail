import React, { Component, PropTypes } from 'react';

export default class Body extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="body">
        {this.props.children}
      </div>
    );
  }
}

Body.propTypes = {
  children: PropTypes.element.isRequired,
};
