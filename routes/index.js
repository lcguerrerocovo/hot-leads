var express = require('express');
var router = express.Router();
var path = require('path');

router.get('/:user/:listing/:hash/:timestamp', function(req, res) {
  res.sendFile('public/index.html', {root: './'});
});

module.exports = router;
