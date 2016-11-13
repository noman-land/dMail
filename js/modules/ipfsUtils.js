import IPFS from 'ipfs';
import Q from 'q';
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
