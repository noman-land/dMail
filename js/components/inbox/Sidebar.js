import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

import { SIDEBAR_LINKS } from '../../modules/constants';

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
        <ul className="list-style-none p-0 m-3-t m-0-b m-0-l m-0-r">
          {SIDEBAR_LINKS.map(({ route, text }) => (
            <li key={route} className="hover-darken bg-white cursor-pointer p-1">
              <Link to={`/${route}`} className="decoration-none text-black">
                {text}
              </Link>
            </li>
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
