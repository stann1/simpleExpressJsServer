const express = require('express');
const path = require('path');
const app = express();
const topicRouter = require('./routes/topics');
const bodyParser = require('body-parser');

const port = process.env.PORT || 3001;        // set our port

// ROUTES FOR OUR API
// =============================================================================
const rootRouter = express.Router();              // get an instance of the express Router

// middleware for all requests
rootRouter.use(function(req, res, next){
    console.log("Request received for url: " + req.originalUrl);
    next(); // make sure we go to the next routes and don't stop here
})


// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
rootRouter.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', rootRouter);
app.use('/api/topics', topicRouter);


// OR use this elegant setup
//var routes = requireDir('./routes'); // https://www.npmjs.org/package/require-dir
//for (var i in routes) app.use('/', routes[i]);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
