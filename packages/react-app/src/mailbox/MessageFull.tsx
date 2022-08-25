import moment from 'moment';
import { useParams } from 'react-router-dom';

export const MessageFull = () => {
  const { messageId } = useParams();
  const [sentDate, subject, sender, body] = [Date.now() / 1000, '', '', ''];
  const timeAgo = moment(sentDate * 1e3).fromNow();
  const prettyDate = moment(sentDate * 1e3).format('LLLL');

  return (
    <div className="message-full">
      <div className="message-subject">{subject}</div>
      <div className="message-body-container">
        <div className="flex-column flex-grow-1">
          <div className="message-header">
            <div className="message-sender">
              <div className="message-sender-name">noman.eth</div>
              <div className="message-sender-id">
                {'<'}
                {sender.slice(0, 6)}
                {'>'}
              </div>
            </div>
            <div className="message-sent-date">
              {timeAgo} ({prettyDate})
            </div>
          </div>
          <div className="message-body">
            {messageId} - {body}
          </div>
        </div>
      </div>
    </div>
  );
};
