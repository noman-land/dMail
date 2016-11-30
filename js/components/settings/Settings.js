import React, { PropTypes, Component } from 'react';
import EthereumSettingsContainer from '../../containers/EthereumSettingsContainer';

const Settings = () => {
  return (
    <div className="settings">
      <h1 className="h2 text-center m-10-b">
        Settings
      </h1>
      <div className="flex-grow-1 p-10-b">
        <div className="flex-column align-items-center list-style-none p-0">
          <div style={{minWidth: 450, maxWidth: 1200}}>
            <EthereumSettingsContainer />
          </div>
        </div>
      </div>
      <div>
        <div className="flex justify-space-between">
          <button className="button">
            {'<< Prev'}
          </button>
          <button className="button">
            {'Next >>'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
