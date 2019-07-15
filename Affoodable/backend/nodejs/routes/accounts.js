const express = require('express');
const router = express.Router();

let Account = require('../models/account');

// create account
router.post('/new', function(req, res) {
    /*
    req.assert('username', 'Account must have username').notEmpty();
    req.assert('password', 'Account must have password').notEmpty();
    req.assert('is_consumer', 'Account must be either consumer or restaurant').notEmpty();

    let errors = req.validationErrors();
    */

    if(errors){
        console.log(errors);
    } else {
        let account = new Account();
        account.username = req.body.username;
        account.password = req.body.password;
        account.is_consumer = req.body.is_consumer;

        account.save(function(err){
            if(err){
                console.log(err);
            } else {
                res.status(200).json({ msg: 'Account created', account });
            }
        })
    }
});

// get all accounts
router.get('/', function(req, res) {
    Account.find({}, function(err, accounts){
        if (err){
            console.log(err);
        } else {
            // Send all accounts
            res.json({accounts: accounts});
        }
    });
});

// edit account information
router.post('/edit/:id', function(req, res){
    let account = {};
    account.username = req.body.username;
    account.password = req.body.password;
    account.is_consumer = req.body.is_consumer;

    let query = {_id: req.params.id}

    Account.update(query, post, function(err){
        if(err){
            console.log(err);
            return;
        } else {
            res.status(200).json({msg: 'Account successfully updated', account: account });
        }
    });
});

// delete account
router.delete('/:id', function(req, res){
    let query = {_id: req.params.id}

    Account.remove(query, function(err){
        if(err){
            console.log(err);
        }
        res.status(200).json({ msg: 'Account deleted successfully' });
    });
});

module.exports = router;