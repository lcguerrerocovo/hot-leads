
var express = require('express');
var md5 = require('md5');
var router = express.Router();

// change to secure salt later
var salt = "666";

// milliseconds until content expiration
var expirationTime = 60000;

router.get('/:account/:hash/:timestamp', function(req, res) {

    var account = req.param('account');
    var timestamp = req.param('timestamp');
    var hash = req.param('hash');

    var timestampHash = md5(timestamp + salt);
    var currentTime = Date.now();
    var secondsToLive = currentTime - timestamp;

	// commenting validation and time expiration during development

	// hash and timestamp + salt have to coincide
    if (true/*timestampHash == hash*/) {
    	// content expires after expirationTime
        if (true/*secondsToLive < expirationTime*/) {
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
 			res.status(422);
        	res.send('Content expired');
        }
    } else {
        res.status(400);
        res.send('Invalid Request');
    }
});

module.exports = router;