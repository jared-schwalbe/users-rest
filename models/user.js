var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: String,
  username: { type: String, required: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now() },
  updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('User', userSchema);
