const express = require('express');
const router = express.Router();

let Deal = require('../models/deal');

router.post('/new', function(req, res){
  /*
  req.assert('restaurantId', 'Restaurant ID must be set').notEmpty();
  req.assert('content', 'Content must be set').notEmpty();

  let errors = req.validationErrors();
  */

  if(errors){
    console.log(errors);
  } else {
    let deal = new Deal();
    deal.restaurantId = req.body.restaurantId;
    deal.content = req.body.content;
    deal.start_time = req.body.start_time;
    deal.end_time = req.body.end_time;
    deal.is_active = req.body.is_active;

    deal.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.status(200).json({ msg: 'Deal created', deal });
      }
    })
  }
});

router.get('/', function(req, res){
  Deal.find({}, function(err, deals){
    if (err){
      console.log(err);
    } else {
      // Send all deals.
      res.json({deals:deals});
    }
  });
});

router.get('/restaurant/:restaurantId', function(req, res){
  Deal.find({restaurantId:req.params.restaurantId, is_active:true}, function(err, deals){
    if (err){
      console.log(err);
    } else {
      // Send active deals for the restaurant matching a restaurant id.
      res.json({deals:deals});
    }
  });
});

router.get('/restaurant/:restaurantId/all', function(req, res){
  Deal.find({restaurantId:req.params.restaurantId}, function(err, deals){
    if (err){
      console.log(err);
    } else {
      // Send active and inactive deals for the restaurant matching a restaurant id.
      res.json({deals:deals});
    }
  });
});

router.post('/edit/:id', function(req, res){
  let deal = {};
  deal.restaurantId = req.body.restaurantId;
  deal.content = req.body.content;
  deal.start_time = req.body.start_time;
  deal.end_time = req.body.end_time;
  deal.is_active = req.body.is_active;

  let query = {_id:req.params.id}

  Deal.update(query, deal, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.status(200).json({msg: 'Deal successfully updated', deal:deal});
    }
  });
});

router.delete('/:id', function(req, res){
  let query = {_id:req.params.id}

  Deal.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.status(200).json({msg:'Deal deleted successfully!'});
  });
});

module.exports = router;
