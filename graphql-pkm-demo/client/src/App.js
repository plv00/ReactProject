import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import PokemonList from './components/PokemonList';
import AddPokemon from './components/AddPokemon';
import AddTrainer from './components/AddTrainer';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div id="main">
          <h1>Trainer's Pokemon List</h1>
          <PokemonList/>
           <AddPokemon/> 
          
          <AddTrainer />

        </div>
      </ApolloProvider>
    );
  }
}

export default App;
