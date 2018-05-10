import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPokemonQuery } from '../queries/queries';

class PokemonDetails extends Component {
  displayPokemonDetails(){
    const{ pokemon } = this.props.data;
    if(pokemon){
      return(
        <div>
          <h2>{pokemon.name}</h2>
          <p>{pokemon.type}</p>
          <p>{pokemon.description}</p>
          <p>{pokemon.trainer.name}</p>
          <p>All Pokemons for this Trainer: </p>
          <ul>
            {pokemon.trainer.pokemons.map(item => {
              return <li key={item.id}>{item.name}</li>
            })}
          </ul>
        </div>
      )
    } else {
      return(<div>No Pokemon selected...</div>);
    }
  }

  render(){
    return(
      <div id="pokemon-details">
        {this.displayPokemonDetails()}
      </div>
    );
  }
}

export default graphql(getPokemonQuery, {
  options: (props) => {
    return {
      variables: {
        id: props.pokemonId
      }
    }
  }
})(PokemonDetails);