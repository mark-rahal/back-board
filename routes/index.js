var express = require('express');
var router = express.Router();
var db = require('./../db');

/* GET home page. */
router.get('/', function (req, res) {
    console.log('getting threads from DB...');
    db.query("SELECT * FROM threads", function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.render('index', {title: 'Express Msg Board', desc: 'Threads', threads: result});
        }
    });
});

/* Get request to view individual thread */
router.get('/thread/view/:id', function (req, res) {
    console.log('finding thread with id ' + req.params.id + ' in DB...');
    let sql = "SELECT * FROM threads WHERE id = ?";
    db.query(sql, req.params.id, function (err, result) {
        if (err)
            console.log(err);
        else {
            res.render('thread', {thread: result[0]});
        }
    });
});

/* GET request for the create thread page */
router.get('/thread/create', function (req, res) {
    res.render('create');
});

/* POST request to create a new thread */
router.post('/thread/create', function (req, res) {
    let sql = "INSERT INTO threads (id, title, content) VALUES (NULL, '" + req.body.title + "', '" + req.body.content + "')";

    db.query(sql, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

/* DELETE request to delete a thread */
router.delete('/thread/delete/:id', function (req, res) {
    let sql = "DELETE FROM threads WHERE id = ?";
    db.query(sql, req.params.id, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

/* GET request to edit a thread */
router.get('/thread/edit/:id', function (req, res) {
    console.log('finding thread with id ' + req.params.id + ' in DB...');
    let sql = "SELECT * FROM threads WHERE id = ?";
    db.query(sql, req.params.id, function (err, result) {
        if (err)
            console.log(err);
        else {
            res.render('edit', {thread: result[0]});
        }
    });
});

/* PATCH request to edit a thread */
router.patch('/thread/edit/:id', function (req, res) {
    let sql = "UPDATE threads SET title = '" + req.body.title + "', content = '" + req.body.content + "' WHERE id = " +
        req.params.id;
    db.query(sql, req.params.id, function (err, result) {
        if (err)
            console.log(err);
        else {
            res.redirect('/');
        }
    });
});

module.exports = router;