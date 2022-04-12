const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const userMiddlewares = require('../middlewares/userValidation');

router.post('/', 
  userMiddlewares.displayNameValidation,
  userMiddlewares.emailValidation,
  userMiddlewares.passwordValidation,
  userController.createUser);

module.exports = router;
