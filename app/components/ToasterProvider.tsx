'use client';

import { NextPage } from 'next';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: React.ReactNode;
}

const ToasterProvider: NextPage<Props> = ({ children }) => {
  return (
    <>
      <Toaster />
      {children}
    </>
  );
};

export default ToasterProvider;
