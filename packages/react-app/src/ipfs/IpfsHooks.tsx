import * as IPFS from 'ipfs-core';
import { useEffect, useState } from 'react';

export const useIpfs = () => {
  const [ipfs, setIpfs] = useState<IPFS.IPFS>();

  useEffect(() => {
    if (!ipfs) {
      IPFS.create()
        .then(setIpfs)
        .catch(error => {
          if (
            error.message === 'Lock already being held for file: ipfs/repo.lock'
          ) {
            console.info('IPFS repo has already been created. Skipping.');
          } else {
            throw error;
          }
        });
    }
    return () => {
      if (ipfs && ipfs.stop) {
        ipfs
          .stop()
          .catch(e => console.error('Problem while stopping IPFS:', e));
      }
    };
  }, [ipfs]);

  return ipfs;
};
