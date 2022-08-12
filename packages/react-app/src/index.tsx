import './styles/index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  Config,
  DAppProvider,
  Localhost,
  Mainnet,
  Ropsten,
} from '@usedapp/core';

import { App } from './App';

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = 'defba93b47f748f09fcead8282b9e58e' as const;
const config: Config = {
  readOnlyChainId: Ropsten.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: 'https://mainnet.infura.io/v3/' + INFURA_PROJECT_ID,
    [Ropsten.chainId]: 'https://ropsten.infura.io/v3/' + INFURA_PROJECT_ID,
    [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </DAppProvider>
  </React.StrictMode>
);
