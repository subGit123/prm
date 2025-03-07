const express = require('express');
const router = express.Router();

router.use(express.json());

//도서 전체 조회
router.get('/book_list', (req, res) => {
  res.json('book list');
});

// book detail
router.get('/book_detail/:id', (req, res) => {
  res.json('book detail');
});

// category
router.get(`/book_list`, (req, res) => {
  req.query.category;
  res.json('category');
});

module.exports = router;
