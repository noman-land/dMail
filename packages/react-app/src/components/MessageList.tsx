import styled from 'styled-components';

// import MessageSnippet from './MessageSnippet';

export type Message = {
  metadata: {
    metadataHash: string;
    sentDate: number;
  };
};

export type MessageListProps = {
  messages: Message[];
  pathname: string;
  setActiveMessageSuccess: () => void;
};

const StyledMessageList = styled.div`
  flex-grow: 1;
`;

export const MessageList = ({
  messages = [],
  pathname,
  setActiveMessageSuccess,
}: MessageListProps) => (
  <StyledMessageList>
    {!messages.length ? (
      <div>You have no messages :)</div>
    ) : (
      <ul className="m-0 p-0">
        {messages
          .sort((a, b) => +b.metadata.sentDate - +a.metadata.sentDate)
          .map(message => (
            // <MessageSnippet
            //   key={message.metadataHash}
            //   message={message}
            //   pathname={pathname}
            //   setActiveMessageSuccess={setActiveMessageSuccess}
            // />
            <div>messages</div>
          ))}
      </ul>
    )}
  </StyledMessageList>
);
