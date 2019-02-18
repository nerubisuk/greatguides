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
import auth from 'utils/auth';

// Get the authentication token from the local storage
const authorization = () => {
  const token = auth.getIdToken();
  return token ? `Bearer ${token}` : '';
};

const httpLink = createHttpLink({
  uri: 'https://api-test.services.activelyme.com/graphql',
});

const authLink = setContext((_, { headers }) => {
  // Return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: authorization(),
    },
  };
});

const wsLink = new WebSocketLink({
  uri: 'wss://us1.prisma.sh/info/activelyme/dev',
  options: {
    reconnect: true,
    connectionParams: {
      authorization: authorization(),
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
