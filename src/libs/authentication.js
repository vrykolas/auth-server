/**
 * Module dependencies.
 */
var jwt = require('jsonwebtoken');

var config = require('../../config/config.json');

// Convert authentication duration to seconds
var authenticationDuration = config.authenticationDuration * 60;

var jwtOptions = {
  expiresIn: authenticationDuration,
  issuer: 'ServiceWorks'
};

function generateAccessToken(data) {
  data.token_type = 'access_token';
  var token = jwt.sign(data, config.secret, jwtOptions);
  return token;
}

module.exports = {
  generateAccessToken: generateAccessToken
};
