const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  Text: {
    type: String,
    required: true,
  },
  IsDone: {
    type: Boolean,
    required: true,
  },
});

module.exports = mongoose.model('Todo', todoSchema);
