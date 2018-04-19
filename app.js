var express = require('express');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var debug = require('debug')('expressjs-scaffold:application');

const init = (data) => {

  var app = express();

  // init routers
  var index = require('./routes/index.router').init(data);

  // configure express middleware
  app.set('json escape', true);
  app.use(logger('dev'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(cookieParser());

  // configure custom middleware

  // register all routes
  app.use('/api', index);

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // error handler
  app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    //res.locals.message = err.message;
    debug(`Request error: ${err.message}. Stacktrace: ${err.stack}`);
    const error = req.app.get('env') !== 'production' ? err : {message: err.message};   // send only message in the response on production, else send full error
    
    // send the error
    res.status(err.status || 500).send({message: error.message, stacktrace: error.stack});
  });

  return Promise.resolve(app);
}

module.exports = {init};