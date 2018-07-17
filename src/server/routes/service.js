const express = require('express');
const api = require('./_api');

const router = express.Router();

router.route('/').get((req, res) => {
  const { services } = api;
  res.json({ success: true, data: services });
});

router.route('/:service_id').get((req, res) => {
  res.json({ success: true });
});

module.exports = router;
