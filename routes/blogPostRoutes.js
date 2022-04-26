const express = require('express');

const router = express.Router();

const blogPostMiddlewares = require('../middlewares/blogPostValidation');
const tokenAuth = require('../middlewares/tokenAuth');
const blogPostController = require('../controllers/blogpost');

router.get('/',
  tokenAuth.tokenAuth,
  blogPostController.getAllBlogPosts);

router.post('/',
  tokenAuth.tokenAuth,
  blogPostMiddlewares.contentValidation,
  blogPostMiddlewares.titleValidation,
  blogPostMiddlewares.categoryIdValidation,
  blogPostController.createBlogPost);

module.exports = router;
