/**
 * @file Holds the Apollo client definition
 * @since 0.1.0
 * @author Anton Komarenko <mi3ta@sent.as>
 */
import { ApolloClient } from 'apollo-client';
import { split } from 'apollo-link';
import { createHttpLink } from 'apollo-link-http';
import { setContext } from 'apollo-link-context';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { WebSocketLink } from 'apollo-link-ws';
import { getMainDefinition } from 'apollo-utilities';

// Get the authentication token from the local storage
const authorization = () => {
  const token = localStorage.getItem('');
  return token ? `Bearer ${token}` : '';
};

const httpLink = createHttpLink({
  uri: '',
});

const authLink = setContext((_, { headers }) => {
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization,
    },
  };
});

const wsLink = new WebSocketLink({
  uri: '',
  options: {
    reconnect: true,
    connectionParams: {
      authorization,
    },
  },
});

const link = split(
  ({ query }) => {
    const { kind, operation } = getMainDefinition(query);
    return kind === 'OperationDefinition' && operation === 'subscription';
  },
  wsLink,
  authLink.concat(httpLink)
);

export default new ApolloClient({
  link,
  cache: new InMemoryCache(),
});
