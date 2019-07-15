const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const port = 8000;

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

mongoose.connect("mongodb+srv://bighero7:BigHero7@bighero7-4lget.mongodb.net/affoodable?retryWrites=true&w=majority", {useNewUrlParser:true});
let db = mongoose.connection;

// Check connection
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

// Check for DB errors
db.on('error', (err) => {
  console.log(err);
});

// Route Files
const restaurants = require('./routes/restaurants');
app.use('/restaurants', restaurants);
const consumers = require('./routes/consumers');
app.use('/consumers', consumers);
const deals = require('./routes/deals');
app.use('/deals', deals);
const accounts = require('./routes/accounts');
app.use('/accounts', accounts);
const place_details = require('./PlaceDetails');
app.use('/place_details', place_details)
const place_search = require('./PlacesSearch');
app.use('/place_search', place_search)

app.listen(port, function(){
  console.log('Server started!');
});