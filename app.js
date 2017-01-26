// Dependencies
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var router = require('./routes');

// Database connection
mongoose.connect('mongodb://localhost/users-db');

// Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.use('/api', router(app, express));

// Start server
app.listen(3000);
