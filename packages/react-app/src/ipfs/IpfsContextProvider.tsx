import { Buffer } from 'buffer';
import { AddResult } from 'ipfs-core-types/dist/src/root';
import { IPFSPath } from 'ipfs-core-types/dist/src/utils';
import { Context, createContext, ReactNode, useCallback, useMemo } from 'react';

import { useIpfs } from './IpfsHooks';
import { collect } from './IpfsUtils';

type IpfsContextValue = {
  addJson: (file: any) => Promise<AddResult>;
  getJson: (cid: IPFSPath) => Promise<any>;
};

const ERROR_TEXT = 'IPFS is not set up yet';

export const IpfsContext: Context<IpfsContextValue> = createContext({
  addJson: _ => Promise.reject(ERROR_TEXT),
  getJson: _ => Promise.reject(ERROR_TEXT),
});

export const IpfsContextProvider = ({ children }: { children: ReactNode }) => {
  const ipfs = useIpfs();

  const addJson = useCallback(
    (file: any) => {
      if (ipfs) {
        return ipfs.add(Buffer.from(JSON.stringify(file)));
      }
      return Promise.reject(new Error(ERROR_TEXT));
    },
    [ipfs]
  );

  const getJson = useCallback(
    async (cid: IPFSPath) =>
      ipfs
        ? collect(ipfs.get(cid))
            .then(result => result[1].toString())
            .then(JSON.parse)
        : Promise.reject(new Error(ERROR_TEXT)),
    [ipfs]
  );

  const value = useMemo<IpfsContextValue>(
    () => ({ addJson, getJson }),
    [addJson, getJson]
  );

  return <IpfsContext.Provider value={value}>{children}</IpfsContext.Provider>;
};
