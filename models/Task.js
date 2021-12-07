const mongoose = require('mongoose');

const taskSchema = mongoose.Schema({
  name: {
    type: String,
    required: [true, 'name is a requried field'],
    minLength: [3, 'Min task string length should be at least 3']
  },
  completed: {
    type: Boolean,
    default: false
  }
});

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;
