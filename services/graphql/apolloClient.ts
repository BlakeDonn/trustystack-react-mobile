import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { GET_DATA } from './queries/queries';

const client = new ApolloClient({
  link: new HttpLink({
    uri: 'http://127.0.0.1:8080/graphql',
  }),
  cache: new InMemoryCache(),
});

export const fetchData = async () => {
  const { data } = await client.query({ query: GET_DATA });
  return data;
};
export default client;

