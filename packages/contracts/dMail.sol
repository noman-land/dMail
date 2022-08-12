// SPDX-License-Identifier: MIT
pragma solidity ^0.8.16;

contract DMail {
  address owner;

  constructor() {
    owner = msg.sender;
  }

  struct Message {
    address sender;
    string messageHash;
    uint timestamp;
  }

  struct Mailbox {
    Message[] unread;
    string archiveAddress;
  }

  mapping (address => Mailbox) mailboxes;

  event ReceivedMail(address sender, address recipient, string messageHash);
  event ArchiveAddressUpdated(address owner, string newArchiveAddress);
  event NewMailArchived(address owner);

  modifier ownerOnly() {
    if (msg.sender != owner)
      revert();
    _;
  }

  function sendMessage(address recipient, string memory messageHash) public {
    mailboxes[recipient].unread.push(Message({
      sender: msg.sender,
      messageHash: messageHash,
      timestamp: block.timestamp
    }));
    emit ReceivedMail(msg.sender, recipient, messageHash);
  }

  function getUnreadCount() public view returns (uint unreadCount) {
    return mailboxes[msg.sender].unread.length;
  }

  function clearInbox() public {
    delete mailboxes[msg.sender].unread;
    emit NewMailArchived(msg.sender);
  }

  function getArchiveAddress() public view returns (string memory archiveAddress) {
    return mailboxes[msg.sender].archiveAddress;
  }

  function getMail(uint index) public view returns (address sender, string memory messageHash, uint timestamp) {
    Message storage message = mailboxes[msg.sender].unread[index];
    return (message.sender, message.messageHash, message.timestamp);
  }

  function updateArchiveAddress(string memory newArchiveAddress) public {
    mailboxes[msg.sender].archiveAddress = newArchiveAddress;
    emit ArchiveAddressUpdated(msg.sender, newArchiveAddress);
  }
}
