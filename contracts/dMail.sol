pragma solidity ^0.4.11;

contract DMail {
  address owner;

  function DMail() public {
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

  function sendMessage(address recipient, string messageHash) public {
    mailboxes[recipient].unread.push(Message({
      sender: msg.sender,
      messageHash: messageHash,
      timestamp: block.timestamp
    }));
    ReceivedMail(msg.sender, recipient, messageHash);
  }

  function getUnreadCount() constant public returns (uint unreadCount) {
    return mailboxes[msg.sender].unread.length;
  }

  function clearInbox() public {
    delete mailboxes[msg.sender].unread;
    NewMailArchived(msg.sender);
  }

  function getArchiveAddress() public constant returns (string archiveAddress) {
    return mailboxes[msg.sender].archiveAddress;
  }

  function getMail(uint i) public constant returns (address sender, string messageHash, uint timestamp) {
    Message storage message = mailboxes[msg.sender].unread[i];
    return (message.sender, message.messageHash, message.timestamp);
  }

  function updateArchiveAddress(string newArchiveAddress) public {
    mailboxes[msg.sender].archiveAddress = newArchiveAddress;
    ArchiveAddressUpdated(msg.sender, newArchiveAddress);
  }

  // Kill contract and return funds to owner
  function kill() public ownerOnly {
    selfdestruct(owner);
  }
}
