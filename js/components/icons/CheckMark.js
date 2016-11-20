import React, { PropTypes } from 'react';

const CheckMark = ({
  checked = true,
  color = '#5bb12f',
  className = '',
  size = 16,
}) => {
  return checked && (
    <svg
      className={`check-mark ${className}`}
      fill={color}
      height={`${size * 0.71}px`}
      viewBox="20 30 40 20"
      width={`${size}px`}
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <polygon points="54.849,26.565 36.464,44.95 25.151,33.636 20.908,37.879 36.464,53.435 59.092,30.808" />
      </g>
    </svg>
  );
};

CheckMark.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  size: PropTypes.number,
};

export default CheckMark;
