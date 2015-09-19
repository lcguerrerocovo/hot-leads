var express = require('express');
var router = express.Router();

router.get('/:account/:hash', function(req, res) {
  var response = { 
    account: req.param('account'),
    rental: {
      prices: [100, 200, 300, 400],
      geo: [{}], 
    }
  };

  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(response));
});

module.exports = router;
