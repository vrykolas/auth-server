/**
 * Module dependencies.
 */
var User = require('../models/user');
var authentication = require('../libs/authentication');

var cookieOptions = {
  httpOnly: true,
  secure: true,
  signed: true
};

function login(req, res) {
  var user = User.find();
  var token = authentication.generateAccessToken(user);
  res.cookie('accessToken', token, cookieOptions);
  res.send({ success: true });
}

module.exports = function(app) {
  app.post('/login', login);
};
