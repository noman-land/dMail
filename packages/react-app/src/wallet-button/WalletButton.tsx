import { useCallback, useEffect, useState } from 'react';
import { shortenAddress, useEthers, useLookupAddress } from '@usedapp/core';

import { Button } from './Button';

export const WalletButton = () => {
  const [rendered, setRendered] = useState<string>('');
  const { account, activateBrowserWallet, deactivate, error } = useEthers();
  const { ens } = useLookupAddress(account);

  useEffect(() => {
    if (ens) {
      setRendered(ens);
    } else if (account) {
      setRendered(shortenAddress(account));
    } else {
      setRendered('');
    }
  }, [account, ens, setRendered]);

  useEffect(() => {
    if (error) {
      console.error('Error while connecting wallet:', error.message);
    }
  }, [error]);

  const handleClick = useCallback(() => {
    if (!account) {
      activateBrowserWallet();
    } else {
      deactivate();
    }
  }, [account, activateBrowserWallet, deactivate]);

  return (
    <Button onClick={handleClick}>
      {rendered === '' && 'Connect Wallet'}
      {rendered !== '' && rendered}
    </Button>
  );
};
