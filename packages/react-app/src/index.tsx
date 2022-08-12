import './styles/index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { DAppProvider, Mainnet } from '@usedapp/core';

import { App } from './App';

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = 'defba93b47f748f09fcead8282b9e58e' as const;
const config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/' + INFURA_PROJECT_ID,
  },
} as const;

ReactDOM.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
