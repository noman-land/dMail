import './index.css';

import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {
  Config,
  DAppProvider,
  Goerli,
  // Localhost,
  Mainnet,
} from '@usedapp/core';

import { App } from './App';
import { DmailContextProvider } from './dmail/DmailContextProvider';
import { IpfsContextProvider } from './ipfs/IpfsContextProvider';

// Change this to your own Infura project id: https://infura.io/register
const config: Config = {
  // readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: `https://mainnet.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    [Goerli.chainId]: `https://goerli.infura.io/v3/${process.env.REACT_APP_INFURA_PROJECT_ID}`,
    // [Localhost.chainId]: 'http://127.0.0.1:8545',
  },
};

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <DAppProvider config={config}>
      <DmailContextProvider>
        <IpfsContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </IpfsContextProvider>
      </DmailContextProvider>
    </DAppProvider>
  </React.StrictMode>
);