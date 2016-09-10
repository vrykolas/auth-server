/**
 * Module dependencies.
 */
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');

var config = require('./config/config.json');
var LocalStrategy = require('passport-local').Strategy;

// Passport configuration

passport.use(new LocalStrategy(
  function(username, password, done) {
    if(username !== config.username) {
      return done(null, false, { message: 'Incorrect username.' });
    }

    if(password != config.password) {
      return done(null, false, { message: 'Incorrect password.' });
    }

    return done(null, true);
  }
));

// Express configuration

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());

app.post(
  '/login',
  passport.authenticate(
    'local',
    {
      session: false
    }
  ),
  function(req, res) {
    res.send({
      authenticated: true
    })
  }
);

app.get(
  '/login',
  function(req, res) {
    res.send({
      authenticated: true
    })
  }
);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
