import React, { Component } from "react";
import { connect } from "react-redux";
import { selectPokemon } from "../actions/index";
import { bindActionCreators } from "redux";

class PokemonList extends Component {
  
  renderList() {
    console.log(this.props.pokemons)
    return this.props.pokemons.map(pokemon => {
      return (
        
        <li
          key={pokemon.id}
          onClick={() => this.props.selectPokemon(pokemon)}
          className="list-group-item"
        >
        
        {pokemon.id}

        </li>
      )
    })
  }

  render() {
    console.log("render props: ", this.props.pokemons)
    return (
      <ul className="list-group col-sm-4">
        {this.renderList()}
      </ul>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    pokemons: state.pokemons
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ selectPokemon: selectPokemon }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);