import { Route, Routes } from 'react-router-dom';

// import { Contract } from '@ethersproject/contracts';
// import { useCall } from '@usedapp/core';
// import { addresses, abis } from '@dmail/contracts';

import { Body } from './layout/Body';
import { Container } from './layout/Container';
import { Header } from './layout/Header';
import { Mailbox } from './mailbox/Mailbox';
import { MessageFull } from './mailbox/MessageFull';
import { MessageList } from './mailbox/MessageList';
import { WalletButton } from './wallet-button/WalletButton';

// // Read more about useDapp on https://usedapp.io/
// const { error: contractCallError, value: tokenBalance } =
//   useCall({
//     contract: new Contract(addresses.ceaErc20, abis.erc20),
//     method: 'balanceOf',
//     args: ['0x3f8CB69d9c0ED01923F11c829BaE4D9a4CB6c82C'],
//   }) ?? {};

const message = (i: number) => ({
  metadata: {
    sender: `0x32${i}`,
    sentDate: Date.now() + i,
  },
  metadataHash: `QmHash${i}`,
  messageContent: {
    body: `Hey ${i}, how are you doing?`,
    subject: `Saying hello ${i}`,
  },
});

const messages = [1, 2, 3, 4, 5, 6].map(message);

export const App = () => (
  <Container>
    <Header>
      <WalletButton />
    </Header>
    <Body>
      <Routes>
        <Route path="/" element={<Mailbox />}>
          <Route path="inbox" element={<MessageList messages={messages} />} />
          <Route path="inbox/:messageId" element={<MessageFull />} />
          <Route path="drafts" element={<div>drafts</div>} />
          <Route path="drafts/:messageId" element={<div>draft message</div>} />
        </Route>
      </Routes>
    </Body>
  </Container>
);
