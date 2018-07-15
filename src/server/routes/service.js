import express from 'express';

const router = express.Router();

router.route('/').get((req, res) => {
  res.json({ success: true });
});

router.route('/:service_id').get((req, res) => {
  res.json({ success: true });
});

export default router;
