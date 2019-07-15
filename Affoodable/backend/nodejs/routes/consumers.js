const express = require('express');
const router = express.Router();

let Consumer = require('../models/consumer');

router.post('/new', function(req, res){
  /*
  req.assert('accountId', 'Account ID must be set').notEmpty();

  let errors = req.validationErrors();
  */

  if(errors){
    console.log(errors);
  } else {
    let consumer = new Consumer();
    consumer.accountId = req.body.accountId;
    consumer.following = req.body.following;

    consumer.save(function(err){
      if(err){
        console.log(err);
      } else {
        res.status(200).json({ msg: 'Consumer created', consumer });
      }
    })
  }
});

router.get('/', function(req, res){
  Consumer.find({}, function(err, consumers){
    if (err){
      console.log(err);
    } else {
      // Send all consumers.
      res.json({consumers:consumers});
    }
  });
});

router.post('/edit/:id', function(req, res){
  let consumer = {};
  consumer.accountId = req.body.accountId;
  consumer.following = req.body.following;

  let query = {_id:req.params.id}

  Consumer.update(query, consumer, function(err){
    if(err){
      console.log(err);
      return;
    } else {
      res.status(200).json({msg: 'Consumer successfully updated', consumer:consumer});
    }
  });
});

router.delete('/:id', function(req, res){
  let query = {_id:req.params.id}

  Consumer.remove(query, function(err){
    if(err){
      console.log(err);
    }
    res.status(200).json({msg:'Consumer deleted successfully!'});
  });
});

module.exports = router;
