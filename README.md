# dMail

### Distributed, decentralized mail. Built on Ethereum and IPFS

dMail utilizes a pre-deployed "post office" smart contract on the Ethereum blockchain that acts like a mail server to house people's unread mail. 

After a user writes a mail, it gets stored in IPFS, and its hash is sent to the "post office" contract to the desired recipient.

The recipient can query the smart contract for their new mail, receive a list of IPFS hashes, and query IPFS for the content of each mail.

### Demo
![dmail-demo](https://user-images.githubusercontent.com/27938023/189566351-ad5c7c72-e231-4601-beb3-b53ce66a1564.gif)

### Future plans

- Integration with ENS ([#3](https://git.noman.land/noman/dMail/issues/3))
- Encrypted mail ([#6](https://git.noman.land/noman/dMail/issues/6))
