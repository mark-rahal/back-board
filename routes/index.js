const express = require('express');
const router = express.Router();
const db = require('./../db');

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
    let sqlThread = "SELECT * FROM threads WHERE ID = ?";

    db.query(sqlThread, req.params.id, function (err, result) {
        if (err)
            console.log(err);
        else {
            let resultThread = result[0];
            let sqlReplies = "SELECT * FROM replies WHERE ParentPost = ?";
            db.query(sqlReplies, req.params.id, function(err, result) {
                if (err)
                    console.log(err);
                else {
                    let resultReplies = result;
                    res.render('thread', {thread: resultThread, replies: resultReplies});
                }
            });
        }
    });
});

/* GET request for the create thread page */
router.get('/thread/create', function (req, res) {
    res.render('create');
});

/* POST request to create a new thread */
router.post('/thread/create', function (req, res) {
    let sql = "INSERT INTO threads (ID, Title, Content) VALUES (NULL, ?, ?)";
    let params = [req.body.title, req.body.content]
    db.query(sql, params, function (err) {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/');
        }
    });
});

/* DELETE request to delete a thread */
router.delete('/thread/delete/:id', function (req, res) {
    //delete all replies to the post first
    let sqlReplies = "DELETE FROM replies WHERE ParentPost = ?";
    db.query(sqlReplies, req.params.id, function(err) {
        if (err) {
            console.log(err);
        }
        else {
            let sqlThread = "DELETE FROM threads WHERE ID = ?";
            db.query(sqlThread, req.params.id, function (err) {
                if (err) {
                    console.log(err);
                } else {
                    res.redirect('/');
                }
            });
        }
    });
});

/* GET request to edit a thread */
router.get('/thread/edit/:id', function (req, res) {
    console.log('finding thread with id ' + req.params.id + ' in DB...');
    let sql = "SELECT * FROM threads WHERE ID = ?";
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
    let sql = "UPDATE threads SET Title = ?, Content = ? WHERE ID = ?";
    let params = [req.body.title, req.body.content, req.params.id];
    db.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            res.redirect('/');
        }
    });
});

//GET request for thread reply creation page
router.get('/thread/:id/create/reply', function (req, res) {
    console.log(req.params.id);
    res.render('createreply', {id: req.params.id});
});

//POST request to create a new reply
router.post('/thread/:id/create/reply', function (req, res) {
    console.log(req.params.id);
    let sql = "INSERT INTO replies (id, Content, ParentPost) VALUES (NULL, ?, ?)";
    let params = [req.body.content, req.params.id];
    db.query(sql, params, function (err, result) {
        if (err)
            console.log(err);
        else {
            res.redirect('/thread/view/' + req.params.id);
        }
    });
});

module.exports = router;