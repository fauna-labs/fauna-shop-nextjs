/* eslint-disable @next/next/no-sync-scripts */
// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0


import Head from 'next/head';
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/css/uikit.min.css" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit.min.js" />
        <script src="https://cdn.jsdelivr.net/npm/uikit@3.7.6/dist/js/uikit-icons.min.js" />
      </Head>
      <ApolloProvider client={client}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
}

export default MyApp;