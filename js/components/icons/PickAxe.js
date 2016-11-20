import React, { PropTypes } from 'react';

const PickAxe = ({
  className = '',
  size = 13,
}) => {
  return (
    <span title="This address is mining">
      <svg
        className={`pick-axe ${className}`}
        height={`${size}px`}
        title="This address is mining"
        viewBox="135 135 225 225"
        width={`${size}px`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          <path d="M353.738,322.354l-94.605-94.605c3.296-5.815,2.484-13.346-2.467-18.296l-0.362-0.362l48.982-48.982    c2.299-2.299,3.273-5.573,2.605-8.759c-0.665-3.168-2.858-5.759-5.867-6.932c-2.791-1.088-6-1.64-9.537-1.64    c-16.74,0-42.093,12.64-68.481,34.015l-2.06-2.06c-2.876-2.877-6.705-4.461-10.78-4.461c-2.683,0-5.252,0.699-7.52,1.99    l-0.538-0.538c-3.976-3.976-9.262-6.165-14.884-6.165c-5.623,0-10.909,2.189-14.884,6.165c-3.976,3.976-6.165,9.261-6.165,14.884    c0,5.623,2.189,10.908,6.165,14.884l0.542,0.542c-3.296,5.815-2.484,13.346,2.467,18.297l2.062,2.062    c-21.07,26.07-39.761,59.072-32.377,78.015c1.438,3.689,4.937,6.072,8.913,6.072c2.558,0,4.965-0.998,6.777-2.81l48.982-48.982    l0.362,0.362c2.877,2.877,6.705,4.461,10.78,4.461c2.683,0,5.252-0.699,7.52-1.99l94.6,94.6c3.976,3.976,9.262,6.165,14.884,6.165    c5.622,0,10.908-2.189,14.884-6.165C361.945,343.915,361.945,330.562,353.738,322.354z M221.849,247.905    c-0.975,0-1.889-0.377-2.573-1.061l-8.569-8.57l-54.61,54.61c-0.581-5.725,1.506-14.19,5.988-23.975    c6.025-13.152,15.914-28.075,28.599-43.156l3.428-4.075l-9.555-9.555c-1.419-1.419-1.419-3.728,0-5.147l24.037-24.037    c0.685-0.685,1.599-1.062,2.573-1.062c0.975,0,1.889,0.377,2.573,1.062l9.555,9.555l4.074-3.427    c25.434-21.393,50.386-34.683,65.119-34.683c0.705,0,1.376,0.032,2.011,0.097l-54.609,54.609l8.569,8.569    c1.419,1.419,1.419,3.728,0,5.147l-24.037,24.037C223.737,247.528,222.823,247.905,221.849,247.905z M179.17,183.92    c0.173-0.584,0.403-1.155,0.691-1.703c0.432-0.822,0.994-1.594,1.685-2.286c1.152-1.152,2.528-1.945,3.988-2.377    c0.876-0.259,1.782-0.389,2.688-0.389c0.906,0,1.812,0.13,2.688,0.389c1.168,0.346,2.282,0.922,3.271,1.729    c0.247,0.202,0.487,0.418,0.717,0.648l0.143,0.143l-13.354,13.354l-0.143-0.143c-1.383-1.383-2.247-3.088-2.593-4.873    c-0.115-0.595-0.173-1.199-0.173-1.803C178.781,185.702,178.911,184.796,179.17,183.92z M348.253,338.144    c-0.086,0.903-0.302,1.796-0.648,2.648c-0.461,1.137-1.152,2.202-2.074,3.124s-1.987,1.613-3.124,2.074    c-0.568,0.231-1.155,0.403-1.75,0.519c-0.595,0.115-1.199,0.173-1.804,0.173c-2.417,0-4.833-0.922-6.677-2.766l-94.206-94.206    l13.354-13.354l18.891,18.891l75.315,75.315c0.922,0.922,1.613,1.987,2.074,3.124c0.346,0.853,0.562,1.745,0.648,2.648    C348.31,336.935,348.31,337.542,348.253,338.144z"/>
        </g>
      </svg>
    </span>
  );
};

PickAxe.propTypes = {
  className: PropTypes.string,
  size: PropTypes.number,
};

export default PickAxe;