// Dependencies
var apiRouter = require('./api');

module.exports = function(app) {
  app.use('/api/v1', apiRouter);
}
