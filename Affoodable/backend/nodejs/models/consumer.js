const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConsumerSchema = new Schema({
  accountId: {
    type: String,
    required: true
  },
  following: {
    type: [String],
    default: []
  }
});

const Consumer = module.exports = mongoose.model('Consumer', ConsumerSchema);