/**
 * Module dependencies.
 */
var passport = require('passport');
var jwt = require('jsonwebtoken');

var User = require('../models/user');

var config = require('../../config/config.json');

function login(req, res) {
  var user = User.find();
  var token = jwt.sign(user, config.secret);
  res.send(token);
}

module.exports = function(app) {
  app.post('/login', login);
};
