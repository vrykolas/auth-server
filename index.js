/**
 * Module dependencies.
 */
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var express = require('express');
var fs = require('fs');
var https = require('https');
var passport = require('passport');

var config = require('./config/config.json');
var serviceworksStrategy = require('./src/strategy/serviceworks');
var authenticationRoutes = require('./src/routes/authentication');

var httpsOptions = {
  key: fs.readFileSync(config.httpsKeyPath),
  cert: fs.readFileSync(config.httpsCertPath)
};

// Passport configuration

passport.use(serviceworksStrategy);

// Express configuration

var app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser(config.cookieSecret));
app.use(passport.initialize());
app.use(passport.authenticate('local', { session: false }));

// Express routing
authenticationRoutes(app);

https.createServer(httpsOptions, app).listen(3000, function() {
  console.log('listening on port 3000');
});
