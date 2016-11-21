import React, { PropTypes } from 'react';

import Sidebar from './Sidebar';
import MessageComposer from './MessageComposer';

const Mailbox = ({ children, isComposing }) => {
  return (
    <div className="mailbox">
      <Sidebar />
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
