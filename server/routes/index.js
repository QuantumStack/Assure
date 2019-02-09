const express = require('express');

const router = express.Router();

// GET ping-pong
router.get('/', (req, res) => {
  res.send(200);
});

module.exports = router;
