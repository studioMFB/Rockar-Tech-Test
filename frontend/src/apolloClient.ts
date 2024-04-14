import { ApolloClient, InMemoryCache } from '@apollo/client/core';


const serverPort = process.env.SERVER_PORT || 4000;
const path = '/rockar';

export const apolloClient = new ApolloClient({
  uri: `http://localhost:${serverPort}${path}`,
  cache: new InMemoryCache(),
});