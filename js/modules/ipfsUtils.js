import IPFS from 'ipfs';
import Q from 'q';

const ipfs = new IPFS();

export const goOnline = () => {
  const deferred = Q.defer();

  ipfs.goOnline(err => {
    if (err) {
      deferred.reject(err);
    }
    deferred.resolve(ipfs);
  });

  return deferred.promise;
};
