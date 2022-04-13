const express = require('express');

const router = express.Router();

const userMiddlewares = require('../middlewares/userValidation');

router.post('/', 
  userMiddlewares.emailValidation,
  userMiddlewares.passwordValidation);

module.exports = router;
