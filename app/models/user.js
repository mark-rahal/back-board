const User = require('./db').User;

exports.getUsers = function() {
    User.findAll().then(function(users) {
    console.log(users);
  });
}