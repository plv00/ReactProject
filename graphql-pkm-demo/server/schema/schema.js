const graphql = require('graphql');
const _ = require('lodash');
const Pokemon = require('../models/pokemon');
const Trainer = require('../models/trainer');
const Pkmgo = require('../models/pkmgo');


const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;


const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    type: {type: GraphQLString},
    description: {type: GraphQLString},
    trainer: {
      type: TrainerType,
      resolve(parent, args){
        return Trainer.findById(parent.trainerId);
      }
    }
  })
});

const PkmgoType = new GraphQLObjectType({
  name: 'Pkmgo',
  fields: () => ({
    id: {type: GraphQLID},
    name: {type: GraphQLString},
    types: {type: GraphQLString},
    description: {type: GraphQLString},
    moves: {type: GraphQLString}
  })
});

const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: () => ({
    id: { type:GraphQLID},
    name: {type: GraphQLString},
    age: {type: GraphQLInt},
    pokemons: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args){
        return Pokemon.find({ trainerId: parent.id})
      }
    }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    pokemon: {
      type: PokemonType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Pokemon.findById(args.id);
      }
    },
    pkmgo: {
      type: PkmgoType,
      resolve(parent, args, req){
        return req.pkmgo;
      }
    },
    trainer: {
      type: TrainerType,
      args: {id: {type: GraphQLID}},
      resolve(parent, args){
        return Trainer.findById(args.id);
      }
    },
    pokemons: {
      type: new GraphQLList(PokemonType),
      resolve(parent, args){
        return Pokemon.find({});
      }
    },
    trainers: {
      type: new GraphQLList(TrainerType),
      resolve(parent, args){
        return Trainer.find({});
      }
    }
  }
})

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addTrainer: {
      type: TrainerType,
      args: {
        name: { type: GraphQLString },
        age: {type: GraphQLInt}
      },
      resolve(parent, args){
        let trainer = new Trainer({
          name: args.name,
          age: args.age
        });
        return trainer.save();
      }
    },
    addPokemon: {
      type: PokemonType,
      args: {
        name: { type: new GraphQLNonNull(GraphQLString)},
        type: { type: new GraphQLNonNull(GraphQLString) },
        description: { type: new GraphQLNonNull(GraphQLString) },
        trainerId: { type: new GraphQLNonNull(GraphQLString) }
      },
      resolve(parent, args){
        let pokemon = new Pokemon({
          name: args.name,
          type: args.type,
          description: args.description,
          trainerId: args.trainerId
        });
        return pokemon.save();
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation
});


