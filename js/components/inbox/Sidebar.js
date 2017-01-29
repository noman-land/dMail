import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { SIDEBAR_LINKS } from '../../utils/constants';

export default class Sidebar extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleComposeClick = this.handleComposeClick.bind(this);
  }

  handleComposeClick() {
    this.props.composingMessage(true);
  }

  render() {
    return (
      <div className="mailbox-sidebar">
        <button className="button primary" onClick={this.handleComposeClick}>
          Compose
        </button>
        <ul className="links">
          {SIDEBAR_LINKS.map(({ route, text }) => (
            <Link className="link" key={route} to={`/${route}`}>
              <li>
                {text}
              </li>
            </Link>
          ))}
        </ul>
      </div>
    );
  }
}

Sidebar.propTypes = {
  composingMessage: PropTypes.func.isRequired,
  isComposing: PropTypes.bool.isRequired,
};
