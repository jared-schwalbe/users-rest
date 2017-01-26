// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes');
var config = require('./config');

// Database connection
mongoose.connect(config.db.genConnStr());

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', router(app, express));

// Start server
app.listen(config.port);
