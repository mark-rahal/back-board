const mysql = require('mysql');

//db
const connection = mysql.createConnection({
    host: 'den1.mysql2.gear.host',
    user: 'msgboard',
    password: 'Gn2EQ-z_5mj6',
    database: 'msgboard'
});

connection.connect(function(err) {
    if (err) console.log(err);
    else console.log("connected as id: " + connection.threadId);
});

module.exports = connection;