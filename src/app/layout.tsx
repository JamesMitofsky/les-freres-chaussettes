'use client'

import { ApolloClient, ApolloProvider, NormalizedCacheObject } from '@apollo/client';
// import type { Metadata } from 'next';
import './globals.css';
import GlobalHeader from '@/components/GlobalHeader';

import createApolloClient from '@/apollo-client';
import { useEffect, useState } from 'react';

// export const metadata: Metadata = {
//   title: 'Les Frères Chaussettes',
//   description:
//     'Joue avec des chaussettes de sport personnalisées, à ton effigie et pour toutes tes compétitions !',
// };


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ApolloProvider client={createApolloClient()}>
        <body>
          <GlobalHeader />
          <main className="flex-grow">{children}</main>
        </body>
      </ApolloProvider>
    </html>
  );
}
