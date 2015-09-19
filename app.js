module.exports = function(options) {
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  var fs = require('fs');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/public', express.static(path.join(__dirname, 'public')));

  var showcase = require('./routes/showcase');
  app.use('/showcase', showcase);

  var json = require('./routes/json');
  app.use('/json', json);

  var index = require('./routes/index');
  app.use('/', index);

  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');  

  return app;
}
