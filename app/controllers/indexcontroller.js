const db = require('./../db');

exports.index = function (req, res) {
    console.log('getting threads from DB...');
    db.query("SELECT * FROM threads", function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.render('index', {title: 'Express Msg Board', desc: 'Threads', threads: result});
        }
    });
};