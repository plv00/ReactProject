import { gql } from 'apollo-boost';

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
  mutation AddPokemon($name: String!, $type: String!, $description: String!, $trainerId: String!){
    addPokemon(name: $name, type: $type, description: $description, trainerId: $trainerId){
      name
      id
    }
  }
`;

const addTrainerMutation = gql`
  mutation AddTrainer($name: String!, $age: Int!){
    addTrainer(name: $name, age: $age){
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

export { getTrainersQuery, getPokemonsQuery, addPokemonMutation, getPokemonQuery, addTrainerMutation};