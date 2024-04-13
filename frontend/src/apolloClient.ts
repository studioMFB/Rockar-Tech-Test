import { ApolloClient, InMemoryCache } from '@apollo/client/core';


const PORT = process.env.SERVER_PORT || 4000;

export const apolloClient = new ApolloClient({
  uri: `http://localhost:${PORT}/graphql`,
  cache: new InMemoryCache(),
});