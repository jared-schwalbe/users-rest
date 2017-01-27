var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;
var LocalStrategy = require('passport-local');
var passport = require('passport');
var User = require('../models/user');
var config = require('./env');

var localOptions = { usernameField: 'username' };

// Setting up local login strategy
var localLogin = new LocalStrategy(localOptions, function(username, password,
  done) {
  User.findOne({ username: username }, function(err, user) {
    if (err) { return done(err); }
    if (!user) { return done(null, false, { error: 'Your login details could not be verified. Please try again.' }); }

    user.comparePassword(password, function(err, isMatch) {
      if (err) { return done(err); }
      if (!isMatch) { return done(null, false, { error: "Your login details could not be verified. Please try again." }); }

      return done(null, user);
    });
  });
});

var jwtOptions = {
  // Telling Passport to check authorization headers for JWT
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  // Telling Passport where to find the secret
  secretOrKey: config.db.secret
};

var jwtLogin = new JwtStrategy(jwtOptions, function(payload, done) {
  // MIGHT HAVE PROBLEM WITH payload._id CHECK PAYLOAD OBJECT
  console.log(payload);
  User.findById(payload._id, function(err, user) {
    if (err) { return done(err, false); }

    if (user) {
      done(null, user);
    } else {
      done(null, false);
    }
  });
});

passport.use(jwtLogin);
passport.use(localLogin);
