const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pokemonSchema = new Schema({
  name: String,
  type: String,
  description: String,
  trainerId: String

});

module.exports = mongoose.model('Pokemon', pokemonSchema);
