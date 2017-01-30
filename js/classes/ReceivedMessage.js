export default class ReceivedMessage {
  constructor({
    labels = [],
    messageContent,
    messageHash,
    sender,
    sentDate,
    starred = false,
    unread = true,
    version = "1",
  }) {
    this.metadata = {
      hasAttachments: !!messageContent.attachments && !!messageContent.attachments.length,
      labels,
      messageHash,
      sender,
      sentDate,
      starred,
      unread,
      version,
    };
    this.messageContent = messageContent;
  }

  toJson() {
    return {
      metadata: this.metadata,
      messageContent: this.messageContent,
    };
  }

  serialize() {
    return this.metadata;
  }
};
