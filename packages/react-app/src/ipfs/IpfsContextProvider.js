import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

import { Buffer } from 'buffer';
import * as IPFS from 'ipfs-core';

export const IpfsContext = createContext({
  addJson: Promise.reject,
  getJson: Promise.reject,
});

export const IpfsContextProvider = ({ children }) => {
  const [ipfs, setIpfs] = useState();

  useEffect(() => {
    if (!ipfs) {
      IPFS.create()
        .then(client => {
          window.ipfs = client;
          setIpfs(client);
        })
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
        ipfs.stop().catch(e => console.error('Problem stopping IPFS:', e));
      }
    };
  }, [ipfs]);

  const addJson = useCallback(
    file => {
      if (ipfs) {
        return ipfs.add(Buffer.from(JSON.stringify(file)));
      }
      return Promise.reject(new Error('IPFS not set up yet'));
    },
    [ipfs]
  );

  const getJson = useCallback(
    async cid => {
      if (ipfs) {
        let buffer = [];
        for await (const buf of ipfs.get(cid)) {
          buffer.push(buf);
        }
        return Promise.resolve(JSON.parse(buffer[1].toString()));
      }

      return Promise.reject(new Error('IPFS not set up yet'));
    },
    [ipfs]
  );

  const value = useMemo(() => ({ addJson, getJson }), [addJson, getJson]);

  return <IpfsContext.Provider value={value}>{children}</IpfsContext.Provider>;
};
