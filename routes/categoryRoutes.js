const express = require('express');

const router = express.Router();

const categoryMiddlewares = require('../middlewares/categoryValidation');
const tokenAuth = require('../middlewares/tokenAuth');
const categoryController = require('../controllers/category');

router.get('/',
  tokenAuth.tokenAuth,
  categoryController.getCategory);

router.post('/',
  tokenAuth.tokenAuth,
  categoryMiddlewares.categoryValidation,
  categoryController.createCategory);

module.exports = router;
