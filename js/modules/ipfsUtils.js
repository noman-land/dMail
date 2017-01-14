import IPFS from 'ipfs';
import Q from 'q';
import { Buffer } from 'buffer';
import ipfsAPI from 'ipfs-api';

let ipfs;

export const goOnline = () => {
  const deferred = Q.defer();

  try {
    ipfs = ipfsAPI({host: '192.168.99.100'});
    deferred.resolve();
  } catch (error) {
    ipfs = new IPFS();
    deferred.resolve();
  }

  return deferred.promise;
};

export const addJson = (file) => {
  const jsonBuffer = new Buffer(JSON.stringify(file));
  return Q(ipfs.files.add(jsonBuffer)).get(0).get('path');
};

export const getJson = (ipfsHash) => {
  const deferred = Q.defer();
  ipfs.files.cat(ipfsHash).then(stream => {
    let buffer = [];
    stream.on('error', error => {
      deferred.reject(error);
    });

    stream.on('data', chunk => {
      buffer.push(chunk);
    });

    stream.on('end', () => {
      const mail = JSON.parse(buffer.toString());
      deferred.resolve(mail);
    })
  }, deferred.reject);
  return deferred.promise;
};

window.dMail = {
  ...window.dMail,
  ipfs,
  ipfsUtils: {
    addJson,
    getJson,
  }
};
