import {
  createContext,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';

export const DmailContext = createContext({});

export const DmailContextProvider = ({ children }) => {
  const [dmail, setDmail] = useState();

  useEffect(() => {
    if (!dmail) {
    }
  }, [dmail]);

  const value = useMemo(() => ({}), []);

  return (
    <DmailContext.Provider value={value}>{children}</DmailContext.Provider>
  );
};
