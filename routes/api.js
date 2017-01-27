// Dependencies
var enableCors = require('./middleware/enable-cors');
var validateRequest = require('./middleware/validate-request');
var userCtrl = require('../controllers/user-ctrl');
var router = require('express').Router();

// Middleware
router.all('/*', enableCors);
router.all('/*', validateRequest);

// Routes for API calls
router.route('/users')
  .get(userCtrl.getAll)
  .post(userCtrl.create);
router.route('/users/:id')
  .get(userCtrl.get)
  .put(userCtrl.update)
  .delete(userCtrl.delete);

module.exports = router;
