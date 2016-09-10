/**
 * Module dependencies.
 */
var passport = require('passport');

var User = require('../models/user');
var authentication = require('../libs/authentication');

function login(req, res) {
  var user = User.find();
  var token = authentication.generateAccessToken(user);
  res.send(token);
}

module.exports = function(app) {
  app.post('/login', login);
};
