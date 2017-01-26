// ENIRONMENT CONFIG
// ==============================================
switch (process.env.NODE_ENV) {
  case 'development':
    module.exports = require('./development');
    break;
  case 'staging':
    module.exports = require('./staging');
    break;
  case 'production':
    module.exports = require('./production');
    break;
  default:
    module.exports = require('./development');
}

// GLOBAL CONFIG
// ==============================================
// Helper function to build connection string for mongoose
module.exports.db.genConnStr = function() {
  return 'mongodb://' + (this.username && this.password ? this.username + ':' +
    this.password + '@' : '') + this.host + (this.port ? ':' + this.port :
    '') + '/' + this.database;
}
