const express = require('express');
const router = express.Router();
const {
  httpPostsGet,
  httpGetPOSTSById,
  httpCreatePosts,
  httpDeletePosts,
  httpUpdatePosts,
} = require('../controllers/posts.controller.js');

router.get('/', httpPostsGet);
router.get('/:id', httpGetPOSTSById);
router.post('/', httpCreatePosts);
router.delete('/:id', httpDeletePosts);
router.post('/update-user/:id', httpUpdatePosts);

module.exports = router;
