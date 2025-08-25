const path = require('path');

const express = require('express');
const router = express.Router();
router.get('/', (req, res) => {
  res.send(' Welcome to Home Router!');
});

module.exports = router;
