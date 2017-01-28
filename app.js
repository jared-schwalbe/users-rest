// Dependencies
var express = require('express');
var https = require('https');
var fs = require('fs');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var logger = require('morgan');
var router = require('./routes');
var config = require('./config');
var app = express();

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

// Grab key and cert for HTTPS
var options = {
    key: fs.readFileSync('./misc/private.key'),
    cert: fs.readFileSync('./misc/certificate.pem')
};

// Start server
https.createServer(options, app).listen(config.env.port, function() {
  console.log('HTTPS server started on port ' + config.env.port);
});
