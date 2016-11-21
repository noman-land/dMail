import React, { Component, PropTypes } from 'react';

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleComposeClick = this.handleComposeClick.bind(this);
  }

  handleComposeClick() {
    // this.props.composeMessage();
  }

  render() {
    return (
      <div className="sidebar">
        <button className="button primary" onClick={this.handleComposeClick}>
          Compose
        </button>
        <ul>
          <li>
            Inbox
          </li>
          <li>
            Drafts
          </li>
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  // composeMessage: PropTypes.func.isRequired,
};
