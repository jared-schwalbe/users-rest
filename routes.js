var userCtrl = require('./controllers/userCtrl.js')

module.exports = function(app, express) {
  var router = express.Router();

  router.route('/users')
    .get(userCtrl.selectAll)
    .post(userCtrl.create);

  router.route('/users/:id')
    .get(userCtrl.select)
    .put(userCtrl.update)
    .delete(userCtrl.delete);

  return router;
}
