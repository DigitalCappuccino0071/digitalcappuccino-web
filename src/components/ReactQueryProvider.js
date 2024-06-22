'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { PropsWithChildren } from 'react';
// import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();
export default function ReactQueryProvider({ children }) {
  return (
    <>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </>
  );
}
