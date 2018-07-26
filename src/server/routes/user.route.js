const express = require('express');
const userController = require('../controllers/user.controller');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/') //eslint-disable-line
  .get(userController.list)
  .post(userController.create);

router.route('/:userId') //eslint-disable-line
  .get(authController.requireSignin, userController.read)
  .put(authController.requireSignin, authController.hasAuthorization, userController.update)
  .delete(authController.requireSignin, authController.hasAuthorization, userController.remove);

router.param('userId', userController.userByID);

module.exports = router;
