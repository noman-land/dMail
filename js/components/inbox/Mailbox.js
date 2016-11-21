import React, { PropTypes } from 'react';

import Sidebar from './Sidebar'

const Mailbox = ({ children }) => {
  return (
    <div className="mailbox">
      <Sidebar />
      <div className="mailbox-body">
        {children}
      </div>
    </div>
  );
};

Mailbox.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Mailbox;
