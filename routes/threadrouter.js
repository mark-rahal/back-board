const express = require('express');
const router = express.Router();
const controller = require('../controllers/threadcontroller');

/* Get request to view individual thread */
router.get('/thread/view/:id', controller.getThreadView);

/* GET request for the create thread page */
router.get('/thread/create', controller.getThreadCreate);

/* POST request to create a new thread */
router.post('/thread/create', controller.postThreadCreate);

/* DELETE request to delete a thread */
router.delete('/thread/delete/:id', controller.deleteThread);

/* GET request to edit a thread */
router.get('/thread/edit/:id', controller.getThreadEdit);

/* PATCH request to edit a thread */
router.patch('/thread/edit/:id', controller.patchThreadEdit);

//GET request for thread reply creation page
router.get('/thread/:id/create/reply', controller.getThreadCreateReply);

//POST request to create a new reply
router.post('/thread/:id/create/reply', controller.postThreadCreateReply);

module.exports = router;