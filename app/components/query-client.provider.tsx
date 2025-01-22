'use client';

import React from 'react';
import {
  QueryClient as QC,
  QueryClientProvider as QCP,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export const QueryClientProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [queryClient] = React.useState(() => new QC());

  return (
    <QCP client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen />
    </QCP>
  );
};
