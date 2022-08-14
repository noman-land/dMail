import { Route, Routes } from 'react-router-dom';

// import { Contract } from '@ethersproject/contracts';
// import { useCall } from '@usedapp/core';
// import { addresses, abis } from '@dmail/contracts';

import { Body } from './components/Body';
import { Container } from './components/Container';
import { Header } from './components/Header';
import { Mailbox } from './components/Mailbox';
import { MessageList } from './components/MessageList';
import { WalletButton } from './components/WalletButton';

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
          <Route
            path="inbox"
            element={
              <MessageList
                messages={messages}
                setActiveMessageSuccess={() => {}}
              />
            }
          />
          <Route path="inbox/:messageId" element={<div>message</div>} />
          <Route path="drafts" element={<div>drafts</div>} />
        </Route>
      </Routes>
    </Body>
  </Container>
);
