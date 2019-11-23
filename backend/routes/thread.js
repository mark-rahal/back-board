const express = require('express');
const router = express.Router();
const threadController = require('../controllers/thread');

router.get('/thread', threadController.getAllThreads);

router.post('/thread', threadController.validateThreadBody, threadController.createThread);

router.get('/thread/:id', threadController.getThread);

router.delete('/thread/:id', threadController.deleteThread);

router.put('/thread/:id', threadController.editThread);

router.post('/thread/:id/reply', threadController.createReply);

module.exports = router;