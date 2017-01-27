// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var router = require('./routes');
var config = require('./config');

// Database connection
mongoose.Promise = global.Promise; // Get rid of warning (use bluebird in prod)
mongoose.connect(config.env.db.genConnStr());

// Use body-parser to get POST requests for API use
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log requests to console
app.use(logger('dev'));

// Add routes
router(app);

// Start server
app.listen(config.env.port, function() {
  console.log('Server started on port ' + config.env.port);
});
