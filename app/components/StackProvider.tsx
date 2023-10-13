'use client';

import { NextPage } from 'next';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

interface Props {
  children: React.ReactNode;
}

const StackProvider: NextPage<Props> = ({ children }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default StackProvider;
