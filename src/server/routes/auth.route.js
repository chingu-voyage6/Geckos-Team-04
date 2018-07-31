const express = require('express');
const authController = require('../controllers/auth.controller');

const router = express.Router();

router.route('/singin').post(authController.singin);

router.route('/signout').get(authController.singout);

module.exports = router;
