import React, { Component } from "react";
import { connect } from 'react-redux';

class PokemonDetail extends Component {
  render() {
    if (!this.props.pokemons) {
      return <div>Select a Pokemon to get started.</div>;
    }

    return (
      <div>
        <h3>Details for:</h3>
        <div>Id: {this.props.pokemons.id}</div>
        <div>Name: {this.props.pokemons.name}</div>
        <div>Types: {this.props.pokemons.types[0]} - {this.props.pokemons.types[1]}</div>
        <div>Attack: {this.props.pokemons.stats.attack}</div>
        <div>Defense: {this.props.pokemons.stats.defense}</div>
        <div>Description: <b> {this.props.pokemons.description}</b></div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    pokemons: state.selectedPokemonId
    
})


export default connect(mapStateToProps)(PokemonDetail);
