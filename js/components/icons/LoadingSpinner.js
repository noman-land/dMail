import React, { PropTypes } from 'react';

const LoadingSpinner = ({
  backgroundColor = 'none',
  duration = 0.8,
  innerOffset = 25,
  isLoading,
  lineFillColor = 'white',
  lineRadius = 1,
  lineWidth = 8,
  numLines = 12,
  outerOffset = 0,
  size = 18,
}) => {
  return isLoading && (
    <div style={{ height: size, width: size }}>
      <svg
        height="100%"
        preserveAspectRatio="xMidYMid"
        viewBox="0 0 100 100"
        width="100%"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          fill={backgroundColor}
          height="100"
          width="100"
          x="0"
          y="0"
        />
        {[...Array(numLines).keys()].map((e, i) => (
          <rect
            fill={lineFillColor}
            height={`${50 - innerOffset + - outerOffset}%`}
            key={i}
            rx={lineRadius}
            ry={lineRadius}
            transform={`rotate(${360 / numLines * i} 50 50) translate(0 0)`}
            x={(100 - lineWidth) / 2}
            y={50 + innerOffset}
            width={lineWidth}
          >
            <animate
              attributeName="opacity"
              begin={`${duration / numLines * i}s`}
              dur={duration}
              from="1"
              repeatCount="indefinite"
              to="0"
            />
          </rect>
        ))}
      </svg>
    </div>
  );
};

LoadingSpinner.propTypes = {
  backgroundColor: PropTypes.string,
  duration: PropTypes.number,
  innerOffset: PropTypes.number,
  isLoading: PropTypes.bool.isRequired,
  lineFillColor: PropTypes.string,
  lineRadius: PropTypes.number,
  lineWidth: PropTypes.number,
  numLines: PropTypes.number,
  outOffset: PropTypes.number,
  size: PropTypes.number,
};

export default LoadingSpinner;
