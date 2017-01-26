var config = require('./production');

// Overwrite production settings for testing
config.mongo.database = 'users-db-staging';

module.exports = config;
