/**
 * @file Holds the Apollo client definition
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { ApolloClient } from 'apollo-client';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import auth from 'utils/auth';

const { REACT_APP_GRAPHQL_API_URL } = process.env;

/* Gets the authentication token from the auth0 object */
const authorization = () => {
  const token = auth.getIdToken();
  return token ? `Bearer ${token}` : '';
};

/* Creates the httpLink */
const httpLink = createHttpLink({
  uri: REACT_APP_GRAPHQL_API_URL,
});

/* Creates the authLink */
const authLink = setContext((_, { headers }) => {
  /* Returns the headers to the context so httpLink can read them */
  return {
    headers: {
      ...headers,
      authorization: authorization(),
    },
  };
});

/* Defines the main link for Apollo client */
const link = authLink.concat(httpLink);

/* Defines the cache */
const cache = new InMemoryCache();

export default new ApolloClient({
  link,
  cache,
});
