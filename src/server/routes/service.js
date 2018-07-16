const express = require('express');
const service = require('../models/Service');

const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ success: true });
});

router.route('/:service_id').get((req, res) => {
  res.json({ success: true });
});

module.exports = router;
