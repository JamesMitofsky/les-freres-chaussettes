import { ApolloClient, InMemoryCache } from '@apollo/client';
import { useEffect, useState } from 'react';

import { serverUrl } from './globals/serverUrl';

export const useConfigClient = () => {
  let defaultJWT: string | null = null;
  if (typeof localStorage !== 'undefined') {
    defaultJWT = localStorage.getItem('jwt');
  }
  const [authTokenStorage, setAuthTokenStorage] = useState(defaultJWT); // by default it is null

  useEffect(() => {
    setAuthTokenStorage(localStorage.getItem('jwt')); // as soon as it is available just update the token
  }, []);

  const client = new ApolloClient({
    uri: `${serverUrl}/graphql`,
    cache: new InMemoryCache(),
    headers: {
      authorization: `Bearer ${authTokenStorage}`,
    },
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'ignore',
      },
      query: {
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      },
    },
  });

  return client;
};
