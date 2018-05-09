import { gql } from 'appolo-boost';

const getTrainersQuery = gql`
  {
    trainers {
      name
      id
    }
  }
`;

const getPokemonsQuery = gql`
  {
    pokemons {
      name
      id
    }
  }
`;

const addPokemonMutation = gql`
  mutation AddPokemon($name: String!, $type: String!, $description: String!, $trainerId: ID!){
    addPokemon(name: $name, type: $type, description: $description, trainerId: $trainerId){
      name
      id
    }
  }
`;

const getPokemonQuery = gql`
  query GetPokemon($id: ID){
    pokemon(id: $id) {
      id
      name
      type
      description
      trainer {
        id
        name
        age
        pokemons {
          name
          id
        }
      }
    }
  }
`;

export { getTrainersQuery, getPokemonsQuery, addPokemonMutation, getPokemonQuery};