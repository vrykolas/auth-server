var user = {
  name: 'Bob'
};

var User = function() {};
User.find = function() {
  return user;
};

module.exports = User;
