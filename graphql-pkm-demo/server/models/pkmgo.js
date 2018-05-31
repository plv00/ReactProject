const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pkmgoSchema = new Schema({
  id: Number,
  name: String,
  types: String,
  description: String,
  moves: String

});

module.exports = mongoose.model('Pkmgo', pkmgoSchema);
