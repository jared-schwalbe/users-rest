var User = require('../models/user');

module.exports.create = function(req, res) {
  var user = new User({
    name: req.body.name,
    email: req.body.email,
    username: req.body.username,
    password: req.body.password
  });

  user.save(function(err) {
    if (err) return res.send(err);
    res.send('Success');
  });
}

module.exports.get = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.send(err);
    res.json(user);
  });
}

module.exports.getAll = function(req, res) {
  console.log('hit');
  User.find(function(err, users) {
    if (err) return res.send(err);
    res.json(users);
  });
}

module.exports.update = function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if (err) return res.send(err);
    if (req.body.name) user.name = req.body.name;
    if (req.body.email) user.email = req.body.email;
    if (req.body.username) user.username = req.body.username;
    if (req.body.password) user.password = req.body.password;

    user.save(function(err) {
      if (err) return res.send(err);
      res.send('Success');
    });
  });
}

module.exports.delete = function(req, res) {
  User.remove({ _id: req.params.id }, function(err, user) {
    if (err) return res.send(err);
    res.send('Success');
  });
}
