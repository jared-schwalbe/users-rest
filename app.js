// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var passport = require('passport');
var router = require('./routes');
var config = require('./config/envs');

// Database connection
mongoose.Promise = global.Promise; // Get rid of warning (use bluebird in prod)
mongoose.connect(config.db.genConnStr());

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Log to console
app.use(morgan('dev'));

// Initialize passport
app.use(passport.initialize());

// Routes
app.use('/api', router(app, express));

// Start server
app.listen(config.port);
