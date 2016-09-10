/**
 * Module dependencies.
 */
var passport = require('passport');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

var config = require('../../config/config.json');

// Convert authentication duration to seconds
var authenticationDuration = config.authenticationDuration * 60;

var jwtOptions = {
  expiresIn: authenticationDuration,
  issuer: 'ServiceWorks'
};

function login(req, res) {
  var user = User.find();
  var token = jwt.sign(user, config.secret, jwtOptions);
  res.send(token);
}

module.exports = function(app) {
  app.post('/login', login);
};
