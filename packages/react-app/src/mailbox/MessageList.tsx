import styled from 'styled-components';
import { Key, useContext, useEffect } from 'react';

import { DmailContext } from '../dmail/DmailContextProvider';
import { ERROR_TEXT, IpfsContext } from '../ipfs/IpfsContextProvider';
import { MessageSnippet } from './MessageSnippet';
import { MessageListProps } from './MessageTypes';

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
  const {
    useClearInbox,
    useGetArchiveAddress,
    useGetMail,
    useGetUnreadCount,
    useSendMessage,
    useUpdateArchiveAddress,
  } = useContext(DmailContext);

  // const {
  //   send: clearInbox,
  //   state: clearInboxState,
  //   events: clearInboxStateEvents,
  // } = useClearInbox();
  // const {
  //   send: getArchiveAddress,
  //   state: archiveAddressState,
  //   events: getArchiveAddressStateEvents,
  // } = useGetArchiveAddress();
  // const {
  //   send: getMail,
  //   state: mailState,
  //   events: getMailStateEvents,
  // } = useGetMail();
  // const {
  //   send: sendMessage,
  //   state: messageState,
  //   events: sendMessageStateEvents,
  // } = useSendMessage();
  // const {
  //   send: updateArchiveAddress,
  //   state: updatedArchiveAddressState,
  //   events: updateArchiveAddressStateEvents,
  // } = useUpdateArchiveAddress();

  const unreadCount = useGetUnreadCount()?.toNumber();
  const archiveAddress = useGetArchiveAddress();
  const cleared = useClearInbox();

  console.log('unread', unreadCount);
  console.log('archive', archiveAddress);
  console.log('cleared', cleared);

  useEffect(() => {
    addJson({ okay: 'hi' })
      .then(({ cid }) => getJson(cid))
      .then(result => console.log('result', result))
      .catch(error => {
        if (error.message === ERROR_TEXT) {
          console.info(`${error.message}. Deferring.`);
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
