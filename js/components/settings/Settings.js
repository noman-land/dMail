import React, { PropTypes, Component } from 'react';
import EthereumSettingsContainer from '../../containers/EthereumSettingsContainer';
import MailboxSettingsContainer from '../../containers/MailboxSettingsContainer';

const Settings = () => {
  return (
    <div className="flex-column flex-grow-1 p-5">
      <h1 className="h2 text-center m-10-b">
        Settings
      </h1>
      <div className="flex-grow-1">
        <div className="flex-column align-items-center list-style-none p-0">
          <div style={{minWidth: 450, maxWidth: 1200}}>
            <EthereumSettingsContainer />
            <hr className="m-10-y" />
            <MailboxSettingsContainer />
          </div>
        </div>
      </div>
      <div className="flex justify-space-between">
        <a className="button">
          {'<< Prev'}
        </a>
        <a className="button">
          {'Next >>'}
        </a>
      </div>
    </div>
  );
}

export default Settings;
