# dMail

### Distributed, decentralized mail. Built on Ethereum and IPFS

dMail utilizes a pre-deployed "post office" smart contract on the Ethereum blockchain that acts like a mail server to house people's unread mail. 

After a user writes a mail, it gets stored in IPFS, and its hash is sent to the "post office" contract to the desired recipient.

The recipient can query the smart contract for their new mail, receive a list of IPFS hashes, and query IPFS for the content of each mail.

### Future plans

- Integration with ENS
- Encryped mail and encrypted IPFS hashes
