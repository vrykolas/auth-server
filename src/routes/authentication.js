/**
 * Module dependencies.
 */
var passport = require('passport');

function login(req, res) {
  res.send({
    authenticated: true
  })
}

module.exports = function(app) {
  app.post('/login',
    passport.authenticate('local', { session: false }),
    login
  );
};
