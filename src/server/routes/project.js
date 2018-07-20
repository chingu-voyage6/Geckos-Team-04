const express = require('express');

const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ success: true, message: 'Project information here!' });
});

module.exports = router;
