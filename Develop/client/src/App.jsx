import './App.css';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Outlet } from 'react-router-dom';

import Navbar from './components/Navbar';

// Important for API Consumption: Create an instance of the ApolloClient class and specify the endpoint of your GraphQL API (e.g., 'http://localhost:3001')—the proxy set up in the previous activity facilitates this. 
// We also instantiate a new InMemoryCache class that automatically caches queried data, enhancing performance.
//make request to graphql endpoint. set up cacheing to speed up transaction between front end and server, in browser (after returning request once)
const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    // Important for API Consumption: Wrap your component tree with the ApolloProvider component to enable access to the ApolloClient from anywhere within the application
    // set client as provider
    <ApolloProvider client={client}>
      <Navbar />
      <Outlet />
    </ApolloProvider >
  );
}

export default App;
