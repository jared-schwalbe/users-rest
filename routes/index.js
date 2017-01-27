var apiRouter = require('./api');
var authRouter = require('./auth');

module.exports = function(app) {
  apiRouter.use('/auth', authRouter);
  app.use('/api', apiRouter);
}
