const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
    // username
    username: {
        type: String,
        required: true
    },

    // password
    password: {
        type: String,
        required: true
    },

    // check if user is either a consumer or restaurant
    is_consumer: {
        type: Boolean,
        required: true
    }
});

const Account = module.exports = mongoose.model('Account', AccountSchema);