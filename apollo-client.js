import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
} from '@apollo/client';
import {setContext} from '@apollo/client/link/context'
import { AUTH_TOKEN } from './src/constants';

const httpLink = createHttpLink({
  uri: 'http://172.30.30.132:8080/v1/graphql',
  headers: {
    "content-type": "application/json",
    // 'x-hasura-admin-secret': 'admin',
  }
})

const authLink = setContext((_, { headers }) => {
  const userInfo = localStorage.getItem(AUTH_TOKEN)

  return {
    headers: {
      ...headers,
      authorization: `Bearer ${JSON.parse(userInfo)?.accessToken}` || ''
    }
  }
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  
  ssrMode: typeof window === 'undefined',
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'cache-and-network',
    },
  },
});



export default client;