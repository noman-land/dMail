import React, { PropTypes } from 'react';

import SidebarContainer from '../../containers/SidebarContainer';
import MessageComposerContainer from '../../containers/MessageComposerContainer';

const Mailbox = ({ children, isComposing }) => {
  return (
    <div className="mailbox">
      <SidebarContainer />
      <div className="mailbox-body">
        {children}
      </div>
      {isComposing && (
        <MessageComposerContainer />
      )}
    </div>
  );
};

Mailbox.propTypes = {
  children: PropTypes.element.isRequired,
  isComposing: PropTypes.bool.isRequired,
};

export default Mailbox;
