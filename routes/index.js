var apiRouter = require('./api');
var authRouter = require('./auth');

module.exports = function(app) {
  app.use('/', authRouter);
  app.use('/api', apiRouter);
}
