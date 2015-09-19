var express = require('express');
var md5 = require('md5');
var router = express.Router();

var csv = require('fast-csv');

var users = require('../db/users')();
var enga = require('../db/enga')();

var validateHash = function(hash, timestamp) {
  // change to secure salt later
  var salt = "666";

  // milliseconds until content expiration
  var expirationTime = 60000;

  var timestampHash = md5(timestamp + salt);
  var currentTime = Date.now();
  var secondsToLive = currentTime - timestamp;

  return true; // hash == timestampHash && secondsToLive < expirationTime;
}

var normalize = function(enga) {
  var e = (parseInt(enga) / 4.0) + 0.25;
  return e; 
}

router.get('/:user/:listing/:hash/:timestamp', function(req, res) {

    var user = req.param('user');
    var listing = req.param('listing');
    var hash = req.param('hash');
    var timestamp = req.param('timestamp');

    if(validateHash(hash, timestamp)) {
      
      response = {
        engagement: normalize(enga[user].enga),
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
