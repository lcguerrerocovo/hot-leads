module.exports = function(options) {
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/public', express.static(path.join(__dirname, 'public')));

  var index = require('./routes/index');
  app.use('/', index);

  return app;
}
