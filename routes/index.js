var express = require('express');
var md5 = require('md5');
var router = express.Router();

var csv = require('fast-csv');

var users = {};

csv.fromPath('db/leads.csv', {headers: true, delimiter: ';'})
  .transform(function(obj){
    return {
      userId: obj.userId,
      timestamp: obj.timestamp,
      accountId: obj.accountId,
      propertyId: obj.propertyId,
      business: obj.business,
      salePrice: obj.salePrice,
      rentPrice: obj.rentPrice,
      lat: obj.lat,
      lon: obj.lon
    };
  })
  .on("data", function(data) {
    console.log(data);
    if(!(data.userId in users)){
      users[data.userId] = [];
    }
    users[data.userId].push(data);
    delete data['userId'];
  })
  .on("end", function() {
    console.log("done");
  })

var validateHash = function(hash, timestamp) {
  // change to secure salt later
  var salt = "666";

  // milliseconds until content expiration
  var expirationTime = 60000;

  var timestampHash = md5(timestamp + salt);
  var currentTime = Date.now();
  var secondsToLive = currentTime - timestamp;

  return true; // hash == timestampHash && secondsToLive < expirationTime
}

router.get('/:user/:account/:listing/:hash/:timestamp', function(req, res) {

    var user = req.param('user');
    var account = req.param('account');
    var listing = req.param('listing');
    var hash = req.param('hash');
    var timestamp = req.param('timestamp');

    if(validateHash(hash, timestamp)) {
      response = users[user];

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    } else {
      res.status(400);
      res.send('Bad request');
    }
});

module.exports = router;
