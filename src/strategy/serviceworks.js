/**
 * Module dependencies.
 */
var LocalStrategy = require('passport-local').Strategy;

var config = require('../../config/config.json');

// Passport configuration

var serviceworksStrategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function(username, password, done) {
    if(username !== config.username) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if(password !== config.password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, true);
  }
);

module.exports = serviceworksStrategy;
