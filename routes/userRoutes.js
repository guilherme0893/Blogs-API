const express = require('express');

const router = express.Router();

const userController = require('../controllers/user');
const userMiddlewares = require('../middlewares/userValidation');
const tokenAuth = require('../middlewares/tokenAuth');

router.post('/', 
  userMiddlewares.displayNameValidation,
  userMiddlewares.emailValidation,
  userMiddlewares.passwordValidation,
  userController.createUser);

router.get('/', tokenAuth.tokenAuth, userController.getAllUsers);

router.get('/:id', tokenAuth.tokenAuth, userController.getUser);

module.exports = router;
