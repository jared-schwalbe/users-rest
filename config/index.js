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
