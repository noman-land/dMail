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
  metadataHash: string;
  messageContent: MessageContent;
};

export type MessageSnippetProps = {
  message: Message;
  setActiveMessageSuccess: (message: Message) => void;
};
