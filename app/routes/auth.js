const express = require('express');
const router = express.Router();

router.post('/', function(req, res) {
  console.log(req.body);
  res.json(req.body);
});

module.exports = router;