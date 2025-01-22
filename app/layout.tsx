import type { Metadata } from 'next';

import React from 'react';
import CssBaseline from '@mui/joy/CssBaseline';
import InitColorSchemeScript from '@mui/joy/InitColorSchemeScript';
import { CssVarsProvider } from '@mui/joy/styles';

import '@fontsource/inter';

import { ModeToggle } from './components/mode-toggle';
import { QueryClientProvider } from './components/query-client.provider';

export const metadata: Metadata = {
  title: 'Testing ground',
  description: 'An app for testing out projects',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' suppressHydrationWarning={true}>
      <meta name='viewport' content='initial-scale=1, width=device-width' />
      <body>
        <InitColorSchemeScript />
        <CssVarsProvider>
          {/* <ModeToggle /> */}
          <CssBaseline />
          <QueryClientProvider>{children}</QueryClientProvider>
        </CssVarsProvider>
      </body>
    </html>
  );
}
