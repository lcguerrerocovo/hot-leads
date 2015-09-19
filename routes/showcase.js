var express = require('express');
var router = express.Router();

var users = require('../db/users')();

router.get('/', function(req, res) { 
  res.render('mail-template', { title: 'The mail template!' })
});

module.exports = router;
