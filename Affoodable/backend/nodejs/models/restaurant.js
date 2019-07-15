const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  accountId: {
    type: String,
    required: true
  },
  placeId: {
    type: String,
    required: true
  }
});

const Restaurant = module.exports = mongoose.model('Restaurant', RestaurantSchema);