import moment from 'moment';
import styled from 'styled-components';
import { useCallback } from 'react';
import { Link } from 'react-router-dom';

// import Attachment from '../icons/Attachment';

type MessageMetadata = {
  sender: string;
  sentDate: number;
};

type MessageContent = {
  body: string;
  subject: string;
};

export type Message = {
  metadata: MessageMetadata;
  metadataHash: string;
  messageContent: MessageContent;
};

export type MessageSnippetProps = {
  message: Message;
  pathname: string;
  setActiveMessageSuccess: (message: Message) => void;
};

const StyledLi = styled.li`
  display: flex;
  border-color: #ccc;
  border-style: solid;
  border-width: 1px 1px 0px 1px;
  justify-content: stretch;
  padding: 12px 16px 12px 12px;

  &:last-child {
    border-bottom: 1px solid #ccc;
  }
`;

const StyledLink = styled(Link)`
  color: black;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  margin-left: 12px;
  text-decoration: none;

  .spacer {
    flex-grow: 1;
  }

  .message {
    .subject {
      font-weight: 600;
      margin-left: 16px;
    }

    .divider {
      margin: 0 6px;
    }

    .body {
      color: #999;
    }
  }
`;

export const MessageSnippet = ({
  message,
  pathname,
  setActiveMessageSuccess,
}: MessageSnippetProps) => {
  const {
    metadata: { sender, sentDate },
    metadataHash,
    messageContent: { body, subject },
  } = message;

  const handleClick = useCallback(() => {
    setActiveMessageSuccess(message);
  }, [message, setActiveMessageSuccess]);

  const prettyDate = moment(sentDate * 1e3).format('MMM DD');
  const longDate = moment(sentDate * 1e3).format('LLLL');

  return (
    <StyledLi onClick={handleClick}>
      <div className="select">
        <input type="checkbox" />
      </div>
      <StyledLink to={`${pathname}/${metadataHash}`}>
        <div className="sender" title={sender}>
          {sender.slice(0, 6)}
        </div>
        <div className="message">
          <span className="subject">{subject}</span>
          <span className="divider">-</span>
          <span className="body">{body}</span>
        </div>
        <span className="spacer" />
        <div className="flex justify-space-between m-3-l">
          <div className="attachment">{/* <Attachment /> */}</div>
          <div className="sent-date" title={longDate}>
            {prettyDate}
          </div>
        </div>
      </StyledLink>
    </StyledLi>
  );
};
