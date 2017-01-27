var User = require('../models/user');

module.exports.create = function(req, res) {
  var user = new User({
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  });

  if (req.body.email) user.email = req.body.email;

  user.save(function(err) {
    if (err) res.send(err);
    res.send('Success');
  });
}

module.exports.select = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    res.json(user);
  });
}

module.exports.selectAll = function(req, res) {
  User.find(function(err, users) {
    if (err) res.send(err);
    res.json(users);
  });
}

module.exports.update = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) res.send(err);
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.name = req.body.email;
    if (req.body.username) user.name = req.body.username;
    if (req.body.password) user.name = req.body.password;
    user.updatedAt = Date.now();
    user.save(function(err) {
      if (err) res.send(err);
      res.send('Success');
    });
  });
}

module.exports.delete = function(req, res) {
  User.remove({ _id: req.params.id }, function(err, user) {
    if (err) res.send(err);
    res.send('Success');
  });
}
