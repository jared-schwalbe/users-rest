// Dependencies
var jwt = require('jwt-simple');
var config = require('../../config');

module.exports = function(req, res, next) {
  var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) ||
    req.headers['x-access-token'];

  if (token) {
    try {
      var decoded = jwt.decode(token, config.env.secret);
      if (decoded.exp <= Date.now()) {
        res.status(400);
        res.json({
          "status": 400,
          "message": "Token Expired"
        });
        return;
      }
      next(); // Send request on its way
    } catch (err) {
      res.status(500);
      res.json({
        "status": 500,
        "message": "Oops something went wrong",
        "error": err
      });
      return;
    }
  } else {
    res.status(401);
    res.json({
      "status": 401,
      "message": "Invalid Token or Key"
    });
    return;
  }
};

// Use this to generate a token
function genToken() {
  const DAYS_UNTIL_EXPIRES = 7;
  var expires = new Date(Date.now() + DAYS_UNTIL_EXPIRES*24*60*60*1000);
  var token = require('jwt-simple').encode({ exp: expires }, config.env.secret);
  return {
    token: token,
    expires: expires
  };
}
