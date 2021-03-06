// Dependencies
var mongoose = require('mongoose');
var bcrypt = require('bcrypt');

// Define a schema for User
var userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
},
{
  timestamps: true
});

// Before saving, salt the password
userSchema.pre('save', function(next) {
  const SALT_FACTOR = 10;
  var user = this;

  if (this.isModified('password') || this.isNew) {
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      if (err) return next(err);
      bcrypt.hash(user.password, salt, function(err, hash) {
        if (err) return next(err);
        user.password = hash;
        next();
      });
    });
  } else {
    return next();
  }
});

// Use this to check plain text password is a match to the hashed one
userSchema.methods.comparePassword = function(passw, cb) {
  bcrypt.compare(passw, this.password, function(err, isMatch) {
    if (err) return cb(err);
    cb(null, isMatch);
  });
};

module.exports = mongoose.model('User', userSchema);
