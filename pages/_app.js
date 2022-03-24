// Copyright Fauna, Inc.
// SPDX-License-Identifier: MIT-0
;
import { ApolloProvider } from '@apollo/client';
import client from '../apollo-client';
import '../styles/globals.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <ApolloProvider client={client}>
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </>
  );
}

export default MyApp;