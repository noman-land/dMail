import React, { PropTypes } from 'react';

const Remove = ({
  color = '#000000',
  size = 13,
}) => {
  return (
    <svg
      className="remove"
      fill={color}
      height={`${size}px`}
      viewBox="22 22 36 36"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <polygon points="56.971,52.728 44.243,40 56.971,27.272 52.728,23.029 40,35.757 27.272,23.029 23.029,27.272 35.757,40   23.029,52.728 27.272,56.971 40,44.243 52.728,56.971 "/>
    </svg>
  );
};

Remove.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number
};

export default Remove;
