import React, { Component, PropTypes } from 'react';

export default class Body extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <div className="body flex">
        {this.props.children}
      </div>
    );
  }
}
