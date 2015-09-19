var express = require('express');
var router = express.Router();

var md5 = require('md5');

var users = require('../db/users')();

function pickRandomProperty(obj) {
    var result;
    var count = 0;
    for (var prop in obj)
        if (Math.random() < 1/++count)
           result = prop;
    return result;
}

function generateHash(timestamp) {
  var salt = "666";
  return md5(timestamp + salt);
}

router.get('/', function(req, res) { 
  var userId = pickRandomProperty(users);
  var events = users[userId]
  var timestamp = new Date().getTime();
  res.render('mail-template', 
    { userId: userId, 
      propertyId: events[0]['propertyId'],
      timestamp: timestamp,
      hash: generateHash(timestamp)
    })
});

module.exports = router;
