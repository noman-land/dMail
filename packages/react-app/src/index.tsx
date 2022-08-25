import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  Config,
  DAppProvider,
  Goerli,
  Localhost,
  Mainnet,
} from '@usedapp/core';

import { App } from './App';
import { IpfsContextProvider } from './ipfs/IpfsContextProvider';

// Change this to your own Infura project id: https://infura.io/register
const INFURA_PROJECT_ID = 'defba93b47f748f09fcead8282b9e58e' as const;
const config: Config = {
  readOnlyChainId: Goerli.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: `https://mainnet.infura.io/v3/${INFURA_PROJECT_ID}`,
    [Goerli.chainId]: `https://goerli.infura.io/v3/${INFURA_PROJECT_ID}`,
    [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
};

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <IpfsContextProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </IpfsContextProvider>
    </DAppProvider>
  </React.StrictMode>
);
