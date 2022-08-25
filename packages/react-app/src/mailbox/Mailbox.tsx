import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

export const Mailbox = () => {
  const [isComposing, setIsComposing] = useState<boolean>(false);
  return (
    <>
      <Sidebar isComposing={isComposing} setIsComposing={setIsComposing} />
      <Outlet />
    </>
  );
};
