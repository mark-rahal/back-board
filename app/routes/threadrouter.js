const express = require('express');
const router = express.Router();
const threadController = require('../controllers/threadcontroller');

router.get('/view/:id', threadController.getThreadView);

/* GET request for the create thread page */
router.get('/create', threadController.getThreadCreate);

/* POST request to create a new thread */
router.post('/create', threadController.validateThreadBody, threadController.postThreadCreate);

/* DELETE request to delete a thread */
router.delete('/delete/:id', threadController.deleteThread);

/* GET request to edit a thread */
router.get('/edit/:id', threadController.getThreadEdit);

/* PATCH request to edit a thread */
router.patch('/edit/:id', threadController.patchThreadEdit);

//GET request for thread reply creation page
router.get('/:id/create/reply', threadController.getThreadCreateReply);

//POST request to create a new reply
router.post('/:id/create/reply', threadController.postThreadCreateReply);

module.exports = router;