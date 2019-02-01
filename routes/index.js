var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express', desc: 'This site is great!' });
});

router.get('/thread/:id', function(req, res, next) {
  res.render("thread", {title: 'Thread #' + req.params.id});
});

module.exports = router;
