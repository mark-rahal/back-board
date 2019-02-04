var mysql = require('mysql');

//db
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'msgboard'
});

connection.connect(function(err) {
    if (err) console.log(err);
    else console.log("connected as id: " + connection.threadId);
});

module.exports = connection;