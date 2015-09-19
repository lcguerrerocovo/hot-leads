var express = require('express');
var md5 = require('md5');
var router = express.Router();

var csv = require('fast-csv');

var users = require('../db/users')();

var validateHash = function(hash, timestamp) {
  // change to secure salt later
  var salt = "666";

  // milliseconds until content expiration
  var expirationTime = 60000;

  var timestampHash = md5(timestamp + salt);
  var currentTime = Date.now();
  var secondsToLive = currentTime - timestamp;

  return hash == timestampHash && secondsToLive < expirationTime
}

router.get('/:user/:listing/:hash/:timestamp', function(req, res) {

    var user = req.param('user');
    var listing = req.param('listing');
    var hash = req.param('hash');
    var timestamp = req.param('timestamp');

    if(validateHash(hash, timestamp)) {
      
      response = {
        engagement: Math.random(),
        listing: listing,
        events: users[user]
      }

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    } else {
      res.status(400);
      res.send('Bad request');
    }
});

module.exports = router;
