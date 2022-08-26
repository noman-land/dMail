import { IPFSPath } from 'ipfs-core-types/dist/src/utils';

export type MessageMetadata = {
  sender: string;
  sentDate: number;
};

export type MessageContent = {
  body: string;
  subject: string;
};

export type Message = {
  metadata: MessageMetadata;
  metadataHash: IPFSPath;
  messageContent: MessageContent;
};

export type MessageSnippetProps = {
  message: Message;
};
