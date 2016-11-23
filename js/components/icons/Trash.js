import React, { PropTypes } from 'react';

const Trash = ({
  color = 'grey',
  size = 18
}) => {
  return (
    <span className="trash">
      <svg
        fill={color}
        height={`${size}px`}
        viewBox="19 26 42 31"
        width={`${size * 4 / 5}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M52,33v29H28V33H52 M57,28H23v39h34V28L57,28z" />
          <path d="M45,20v-3H35v3H20v5h40v-5H45z" />
        </g>
      </svg>
    </span>
  );
};

Trash.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
};

export default Trash;
