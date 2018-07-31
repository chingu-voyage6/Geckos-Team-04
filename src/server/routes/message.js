const express = require('express');

const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ success: true, message: 'Message information here!' });
});

module.exports = router;
