var AuthController = require('../controllers/auth-ctrl');
var passport = require('passport');
var passportService = require('../config/passport');
var router = require('express').Router();

// Middleware to require login/auth
var requireAuth = passport.authenticate('jwt', { session: false });
var requireLogin = passport.authenticate('local', { session: false });

router.post('/register', AuthController.register);
router.post('/login', requireLogin, AuthController.login);

module.exports = router;
