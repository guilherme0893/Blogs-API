const express = require('express');

const router = express.Router();

const userMiddlewares = require('../middlewares/userValidation');
// const tokenMiddleware = require('../middlewares/tokenValidation');
const loginController = require('../controllers/login');

router.post('/', 
  userMiddlewares.emailValidation,
  userMiddlewares.passwordValidation,
  // tokenMiddleware.tokenValidation,
  loginController.login);

module.exports = router;
