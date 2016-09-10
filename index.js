/**
 * Module dependencies.
 */
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');

var config = require('./config/config.json');
var serviceworksStrategy = require('./src/strategy/serviceworks');

// Passport configuration

passport.use(serviceworksStrategy);

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
