import React from 'react'
import { ApolloClient, gql, InMemoryCache } from "@apollo/client"
import { ApolloProvider } from "@apollo/client"
import {BrowserRouter as Router, Route} from 'react-router-dom'

import { Launches } from './components/Launches'
import  Launch  from './components/Launch'

import logo from './logo.png'

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql',
  cache: new InMemoryCache()
})

const App = () => {

    return (
      <ApolloProvider client={client}>
        <Router>
            <div className="container">
             <img src={logo} alt="SpaceX" style={{ width: 300, display: 'block', margin: 'auto' }} />
             <Route exact path="/" component={Launches} /> 
             <Route exact path="/launch/:flight_number" component={Launch} /> 
            </div>
          </Router>
    </ApolloProvider>
  );
  
 
}

export default App;
