import React, { PropTypes } from 'react';

const MessageFull = ({ message: { subject, body } }) => {
  return (
    <div>
      <div>
        Subject: {subject}
      </div>
      <div>
        Body: {body}
      </div>
    </div>
  );
};

MessageFull.propTypes = {
  message: PropTypes.object.isRequired
};

export default MessageFull;
