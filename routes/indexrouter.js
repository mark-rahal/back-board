const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexcontroller');
const threadController = require('../controllers/threadcontroller');

/* GET home page. */
router.get('/', indexController.index);

router.get('/thread/view/:id', threadController.getThreadView);

/* GET request for the create thread page */
router.get('/thread/create', threadController.getThreadCreate);

/* POST request to create a new thread */
router.post('/thread/create', threadController.validateThreadBody, threadController.postThreadCreate);

/* DELETE request to delete a thread */
router.delete('/thread/delete/:id', threadController.deleteThread);

/* GET request to edit a thread */
router.get('/thread/edit/:id', threadController.getThreadEdit);

/* PATCH request to edit a thread */
router.patch('/thread/edit/:id', threadController.patchThreadEdit);

//GET request for thread reply creation page
router.get('/thread/:id/create/reply', threadController.getThreadCreateReply);

//POST request to create a new reply
router.post('/thread/:id/create/reply', threadController.postThreadCreateReply);

module.exports = router;