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
  addJson: _ => new Promise(),
  getJson: _ => new Promise(),
});

export const IpfsContextProvider = ({ children }) => {
  const [ipfs, setIpfs] = useState();

  useEffect(() => {
    if (!ipfs) {
      IPFS.create().then(client => {
        window.ipfs = client;
        setIpfs(client);
      });
    }
    return () => {
      if (ipfs && ipfs.stop) {
        ipfs.stop().catch(console.error);
      }
    };
  }, [ipfs]);

  const addJson = useCallback(
    file => {
      if (ipfs) {
        return ipfs.add(Buffer.from(JSON.stringify(file)));
      }
      return Promise.reject(new Error('ipfs not set up yet'));
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

      return Promise.reject(new Error('ipfs not set up yet'));
    },
    [ipfs]
  );

  const value = useMemo(() => ({ addJson, getJson }), [addJson, getJson]);

  return <IpfsContext.Provider value={value}>{children}</IpfsContext.Provider>;
};
