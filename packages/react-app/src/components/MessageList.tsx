import styled from 'styled-components';

import { Message, MessageSnippet } from './MessageSnippet';

export type MessageListProps = {
  messages: Message[];
  pathname: string;
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
  pathname,
  setActiveMessageSuccess,
}: MessageListProps) => (
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
              pathname={pathname}
              setActiveMessageSuccess={setActiveMessageSuccess}
            />
          ))}
      </StyledUl>
    )}
  </StyledMessageList>
);
