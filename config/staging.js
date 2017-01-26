var config = require('./production');

// Overwrite production settings for testing
config.db.name = 'users-db-staging';

module.exports = config;
