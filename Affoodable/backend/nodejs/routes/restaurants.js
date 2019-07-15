const express = require('express');
const router = express.Router();

let Restaurant = require('../models/restaurant');

router.post('/new', function(req, res){
  /*
  req.assert('accountId', 'Account ID must be set').notEmpty();

  let errors = req.validationErrors();
  */

  if(errors){
    console.log(errors);
  } else {
    let restaurant = new Restaurant();
    restaurant.accountId = req.body.accountId;
    restaurant.placeId = req.body.placeId;

    restaurant.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.status(200).json({ msg: 'Restaurant created', restaurant });
      }
    })
  }
});

router.get('/', function(req, res){
  Restaurant.find({}, function(err, restaurants){
    if (err){
      console.log(err);
    } else {
      // Send all restaurants.
      res.json({restaurants:restaurants});
    }
  });
});

router.post('/edit/:id', function(req, res){
  let restaurant = {};
  restaurant.accountId = req.body.accountId;
  restaurant.placeId = req.body.placeId;

  let query = {_id:req.params.id}

  Restaurant.update(query, restaurant, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.status(200).json({msg: 'Restaurant successfully updated', restaurant:restaurant});
    }
  });
});

router.delete('/:id', function(req, res){
  let query = {_id:req.params.id}

  Restaurant.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.status(200).json({msg:'Restaurant deleted successfully!'});
  });
});

module.exports = router;
