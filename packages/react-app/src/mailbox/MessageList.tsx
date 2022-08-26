import { useContext, useEffect } from 'react';
import styled from 'styled-components';

import { IpfsContext } from '../ipfs/IpfsContextProvider';
import { MessageSnippet } from './MessageSnippet';
import { Message } from './MessageTypes';

type MessageListProps = {
  messages: Message[];
  setActiveMessageSuccess: () => void;
};

const StyledMessageList = styled.div`
  flex-grow: 1;
  padding: 0 16px 16px 0;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MessageList = ({
  messages,
  setActiveMessageSuccess,
}: MessageListProps) => {
  const { addJson, getJson } = useContext(IpfsContext);

  useEffect(() => {
    addJson({ okay: 'hi' })
      .then(({ cid }) => getJson(cid))
      .then(result => console.log('result', result))
      .catch(error => {
        if (error.message === 'IPFS not set up yet') {
          console.info(`${error.message}. Skipping.`);
        } else {
          throw error;
        }
      });
  }, [addJson, getJson]);

  return (
    <StyledMessageList>
      {!messages.length ? (
        <div>You have no messages :)</div>
      ) : (
        <StyledUl>
          {messages
            .sort((a, b) => +b.metadata.sentDate - +a.metadata.sentDate)
            .map(message => (
              <MessageSnippet
                key={message.metadataHash}
                message={message}
                setActiveMessageSuccess={setActiveMessageSuccess}
              />
            ))}
        </StyledUl>
      )}
    </StyledMessageList>
  );
};
