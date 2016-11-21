import React, { PropTypes } from 'react';

import Sidebar from './Sidebar';
import MessageComposer from './MessageComposer';

const Mailbox = ({ children }) => {
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
};

export default Mailbox;
