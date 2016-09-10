/**
 * Module dependencies.
 */
var express = require('express');
var passport = require('passport');
var bodyParser = require('body-parser');

var config = require('./config/config.json');
var serviceworksStrategy = require('./src/strategy/serviceworks');
var authenticationRoutes = require('./src/routes/authentication');

// Passport configuration

passport.use(serviceworksStrategy);

// Express configuration

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(passport.initialize());
app.use(passport.authenticate('local', { session: false }));

// Express routing
authenticationRoutes(app);

app.listen(3000, function() {
  console.log('listening on port 3000');
});
