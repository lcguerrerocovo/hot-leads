var express = require('express');
var md5 = require('md5');
var router = express.Router();



var csv = require('fast-csv');
var fileStream = fs.createReadStream("db/leads.csv"),
        parser = fastCsv();

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
      var response = {
          account: account,
          timestamp: timestamp,
          hash: timestampHash,
          currentTime: currentTime,
          secondsToLive: secondsToLive,

          rental: {
              prices: [100, 200, 300, 400],
              geo: [{}],
          }
      };

      res.setHeader('Content-Type', 'application/json');
      res.send(JSON.stringify(response));
    } else {
      res.status(400);
      res.send('Bad request');
    }
});

module.exports = router;
