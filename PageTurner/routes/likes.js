const express = require('express');
const router = express.Router();

router.use(express.json());

// add likes
router.post('/book_likes/:id', (req, res) => {
  res.json('likes!!!!!');
});

// del likes
router.delete('/book_likes/:id', (req, res) => {
  res.json('Nooooo likes');
});

module.exports = router;
