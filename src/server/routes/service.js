const express = require('express');
const api = require('../controllers');

const router = express.Router();

const { services } = api;

router.route('/').get((req, res) => {
  res.json({ success: true, data: services });
});

router.route('/:serviceId').get((req, res) => {
  const { serviceId } = req.params;
  res.json({ success: true, data: services.services[serviceId - 1] || {} });
});

router.route('/near-me/:locationId').get((req, res) => {
  const { locationId } = req.params;
  const popularServices = services.popularServices(locationId);
  res.json({ success: true, data: popularServices });
});

module.exports = router;
