module.exports = function(options) {
  var express = require('express');
  var app = express();
  var path = require('path');
  var bodyParser = require('body-parser');
  var cookieParser = require('cookie-parser');
  //
  // view engine setup
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');

  // uncomment after placing your favicon in /public
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use('/public', express.static(path.join(__dirname, 'public')));

  var index = require('./routes/index');
  app.use('/', index);

  return app;
}
