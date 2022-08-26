import { Buffer } from 'buffer';
import { AddResult } from 'ipfs-core-types/dist/src/root';
import { IPFSPath } from 'ipfs-core-types/dist/src/utils';
import { Context, createContext, ReactNode, useCallback, useMemo } from 'react';

import { useIpfs } from './IpfsHooks';
import { collect } from './IpfsUtils';

type AddJson = (json: any) => Promise<AddResult>;
type GetJson = (cid: IPFSPath) => Promise<any>;

type IpfsContextValue = {
  addJson: AddJson;
  getJson: GetJson;
};

export const ERROR_TEXT = 'IPFS is not set up yet';

export const IpfsContext: Context<IpfsContextValue> = createContext({
  addJson: _ => Promise.reject(new Error(ERROR_TEXT)),
  getJson: _ => Promise.reject(new Error(ERROR_TEXT)),
});

export const IpfsContextProvider = ({ children }: { children: ReactNode }) => {
  const ipfs = useIpfs();

  const addJson = useCallback<AddJson>(
    json =>
      ipfs
        ? ipfs.add(Buffer.from(JSON.stringify(json)))
        : Promise.reject(new Error(ERROR_TEXT)),
    [ipfs]
  );

  const getJson = useCallback<GetJson>(
    async cid =>
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
