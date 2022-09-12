import * as dMailUtils from './dMailUtils';
import * as ipfsUtils from '../ipfs/IpfsContextProvider';
import MessageWithMetadata from '../classes/MessageWithMetadata';

export const fetchArchivedMessages = account =>
  dMailUtils
    .fetchArchiveAddress(account)
    .then(archiveAddress =>
      archiveAddress === ''
        ? Promise.resolve([])
        : ipfsUtils
            .getJson(archiveAddress)
            .then(archive =>
              Promise.all(archive.metadataHashes.map(fetchMessage))
            )
    );

export const fetchNewMessages = account => {
  console.time('Fetch messages');
  return dMailUtils.fetchNewMessages(account).then(newMessages => {
    console.timeEnd('Fetch messages');
    return newMessages.length === 0
      ? Promise.resolve([])
      : Promise.all(
          newMessages.map(newMessageMetadata =>
            ipfsUtils
              .getJson(newMessageMetadata.messageHash)
              .then(messageContent => {
                const messageWithMetadata = new MessageWithMetadata({
                  messageContent,
                  ...newMessageMetadata,
                });
                return ipfsUtils
                  .addJson(messageWithMetadata.getMetadata())
                  .then(metadataHash => ({
                    ...messageWithMetadata.toJson(),
                    metadataHash,
                  }));
              })
          )
        );
  });
};

export const fetchMessage = metadataHash => {
  console.time('Fetch metadata');
  return ipfsUtils.getJson(metadataHash).then(metadata => {
    console.timeEnd('Fetch metadata');
    console.time('Fetch message');
    return ipfsUtils.getJson(metadata.messageHash).then(messageContent => {
      console.timeEnd('Fetch message');
      return {
        ...new MessageWithMetadata({ messageContent, ...metadata }).toJson(),
        metadataHash,
      };
    });
  });
};
