import styled from 'styled-components';
import { Key, useContext, useEffect } from 'react';

import { ERROR_TEXT, IpfsContext } from '../ipfs/IpfsContextProvider';
import { MessageSnippet } from './MessageSnippet';
import { Message } from './MessageTypes';

type MessageListProps = {
  messages: Message[];
};

const StyledMessageList = styled.div`
  flex-grow: 1;
  padding: 0 16px 16px 0;
`;

const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
`;

export const MessageList = ({ messages }: MessageListProps) => {
  const { addJson, getJson } = useContext(IpfsContext);

  useEffect(() => {
    addJson({ okay: 'hi' })
      .then(({ cid }) => getJson(cid))
      .then(result => console.log('result', result))
      .catch(error => {
        if (error.message === ERROR_TEXT) {
          console.info(`${error.message}. Deffering.`);
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
                key={message.metadataHash as Key}
                message={message}
              />
            ))}
        </StyledUl>
      )}
    </StyledMessageList>
  );
};
