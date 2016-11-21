import React, { PropTypes } from 'react';

import MessageComposer from './MessageComposer';
import SidebarContainer from '../../containers/SidebarContainer';

const Mailbox = ({ children, isComposing }) => {
  return (
    <div className="mailbox">
      <SidebarContainer />
      <div className="mailbox-body">
        {children}
      </div>
      <MessageComposer />
    </div>
  );
};

Mailbox.propTypes = {
  children: PropTypes.element.isRequired,
  isComposing: PropTypes.bool.isRequired,
};

export default Mailbox;
