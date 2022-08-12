import React from 'react';

// import { Contract } from '@ethersproject/contracts';
// import { useCall } from '@usedapp/core';
// import { addresses, abis } from '@dmail/contracts';

import { Body } from './components/Body';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { MessageList } from './components/MessageList';
import { Sidebar } from './components/Sidebar';
import { WalletButton } from './components/WalletButton';

// // Read more about useDapp on https://usedapp.io/
// const { error: contractCallError, value: tokenBalance } =
//   useCall({
//     contract: new Contract(addresses.ceaErc20, abis.erc20),
//     method: 'balanceOf',
//     args: ['0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C'],
//   }) ?? {};
export const App = () => (
  <Container>
    <Header>
      <WalletButton />
    </Header>
    <Body>
      <Sidebar composingMessage={() => {}} />
      <MessageList
        messages={[]}
        pathname=""
        setActiveMessageSuccess={() => {}}
      />
    </Body>
  </Container>
);
