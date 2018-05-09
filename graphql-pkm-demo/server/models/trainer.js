const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trainerSchema = new Schema({
  name: String,
  age: Number
});

module.exports = mongoose.model('Trainer', trainerSchema);
