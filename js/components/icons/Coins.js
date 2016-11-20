import React, { PropTypes } from 'react';

const Coins = ({
  className = '',
  color = '#000000',
  fill = 'none',
  size = 13,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  strokeMiterlimit = 10,
  strokeWidth = 2,
}) => {
  return (
    <span
      className={`${className}`}
      title="This is your coinbase account, which is where your mining rewards go"
    >
      <svg
        height={`${size}px`}
        viewBox="0 0 50 50"
        width={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill={fill}
          height="50"
          width="50"
        />
        <ellipse
          cx="35"
          cy="6"
          fill="none"
          rx="14"
          ry="5"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M21,7c0,0.912,0,5.088,0,6c0,2.761,6.266,5,14,5s14-2.239,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M28.55,24.439C30.48,24.797,32.674,25,35,25c7.734,0,14-2.239,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M21,14c0,0.912,0,4.27,0,4.27"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M29.025,31.523C30.837,31.829,32.862,32,35,32c7.734,0,14-2.238,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M28.948,38.51C30.779,38.824,32.832,39,35,39c7.734,0,14-2.238,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <ellipse
          cx="15"
          cy="23"
          fill="none"
          rx="14"
          ry="5"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M1,24c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M1,31c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
        <path
          d="  M1,38c0,0.912,0,5.088,0,6c0,2.762,6.266,5,14,5s14-2.238,14-5c0-0.912,0-5.088,0-6"
          fill="none"
          stroke={color}
          strokeLinecap={strokeLinecap}
          strokeLinejoin={strokeLinejoin}
          strokeMiterlimit={strokeMiterlimit}
          strokeWidth={strokeWidth}
        />
      </svg>
    </span>
  );
};

Coins.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  fill: PropTypes.string,
  size: PropTypes.number,
  strokeLinecap: PropTypes.string,
  strokeLinejoin: PropTypes.string,
  strokeMiterlimit: PropTypes.number,
  strokeWidth: PropTypes.number,
};

export default Coins;
