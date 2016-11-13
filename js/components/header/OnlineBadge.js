import React, { PropTypes } from 'react';
import classNames from 'classnames';

const OnlineBadge = ({ isOnline, children, className }) => {
  return (
    <div className={classNames(
      {
        'bg-green': isOnline,
        'bg-red': !isOnline,
      },
      'circle',
      'm-1-x',
      'p-2',
      'text-white',
      className
    )}>
      {children}
    </div>
  );
};

OnlineBadge.propTypes = {
  children: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default OnlineBadge;
