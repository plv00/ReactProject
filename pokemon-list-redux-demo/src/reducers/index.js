import { combineReducers } from 'redux';
import PokemonsReducer from './PokemonsReducer';
import SelectionReducer from './SelectionReducer';

export default combineReducers({
  pokemons: PokemonsReducer,
  selectedPokemonId: SelectionReducer
})