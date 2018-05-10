import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { getPokemonsQuery } from '../queries/queries';
import PokemonDetails from './PokemonDetails';

class PokemonList extends Component {
  constructor(props){
    super(props);
    this.state = {
      selected: null
    }
  }

  displayPokemons(){
    var data = this.props.data;
    if(data.loading){
      return(<div>Loading pokemons...</div>);
    } else {
      return data.pokemons.map(pokemon => {
        return(
          <li key={pokemon.id} onClick={(e) => this.setState({selected: pokemon.id})}>{pokemon.name}</li>
        );
      })
    }
  }

  render(){
    return(
      <div>
        <ul id="pokemon-list">
          {this.displayPokemons()}
        </ul>
        <PokemonDetails pokemonId={this.state.selected}/>
      </div>
    )
  }


}


export default graphql(getPokemonsQuery)(PokemonList);