import IPFS from 'ipfs';
import Q from 'q';
import { Buffer } from 'buffer';
window.ipfs = new IPFS('ipfs'); // this is the name of the indexDB database

export const goOnline = () => {
  const deferred = Q.defer();
  ipfs.init({ emptyRepo: true, bits: 4096 }, error => {
    if (error) {
      if (~error.toString().indexOf('repo already exists')) {
        ipfs.goOnline(error => {
          if (error) {
            deferred.reject(error);
            return;
          }

          deferred.resolve();
        });
        return;
      }
      deferred.reject(error);
    }

    ipfs.load((error) => {
      if (error) {
        deferred.reject(error);
        return;
      }

      ipfs.goOnline(error => {
        if (error) {
          deferred.reject(error);
          return;
        }

        deferred.resolve();
      });
    });
  });

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

window.addJson = addJson;
window.getJson = getJson;
