import Q from 'q';
import * as ipfsUtils from './ipfsUtils';
import MessageWithMetadata from '../classes/MessageWithMetadata';

export const fetchMessage = metadataHash => {
  console.time('Fetch metadata');
  return ipfsUtils.getJson(metadataHash).then(metadata => {
    console.timeEnd('Fetch metadata');
    console.time('Fetch message');
    return ipfsUtils.getJson(metadata.messageHash).then(messageContent => {
      console.timeEnd('Fetch message');
      return {
        ...new MessageWithMetadata({messageContent, ...metadata}).toJson(),
        metadataHash,
      };
    });
  });
};
