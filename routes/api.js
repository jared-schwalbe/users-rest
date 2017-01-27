var userCtrl = require('../controllers/user-ctrl');
var router = require('express').Router();

router.route('/users')
  .get(userCtrl.selectAll)
  .post(userCtrl.create);

router.route('/users/:id')
  .get(userCtrl.select)
  .put(userCtrl.update)
  .delete(userCtrl.delete);

module.exports = router;
