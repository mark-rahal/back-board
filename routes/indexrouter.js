const express = require('express');
const router = express.Router();
const controller = require('../controllers/indexcontroller');

/* GET home page. */
router.get('/', controller.index);

module.exports = router;