import React, { PropTypes } from 'react';

const MessageSnippet = ({ message: { subject } }) => {
  return (
    <li className="message-snippet">
      <div>
        {subject}
      </div>
    </li>
  );
};

MessageSnippet.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageSnippet;
