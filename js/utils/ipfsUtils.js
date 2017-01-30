import 'ipfs';
import Q from 'q';
import { Buffer } from 'buffer';
import ipfsAPI from 'ipfs-api';
import { DEFAULT_HOSTNAME } from '../utils/constants';

let ipfs;

export const init = (customHostname) => {
  return goOnline(customHostname);
};

export const goOnline = (customHostname) => {
  const hostname = customHostname || DEFAULT_HOSTNAME;
  ipfs = ipfsAPI({host: hostname});
  return getVersion();
};

export const getVersion = () => {
  return Q(ipfs.version());
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
