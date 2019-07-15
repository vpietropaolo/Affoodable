const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DealSchema = new Schema({
  restaurantId: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  start_time: {
    type: Date,
    default: Date.now
  },
  end_time: {
    type: Date,
    defaut: Date.now
  },
  is_active: {
    type: Boolean,
    default: true
  }
});

const Deal = module.exports = mongoose.model('Deal', DealSchema);
