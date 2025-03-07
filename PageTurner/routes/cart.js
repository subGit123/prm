const express = require('express');
const router = express.Router();

router.use(express.json());

// add cart
router.post('/', (req, res) => {
  res.json('add cart');
});

// select cart
router.get('/', (req, res) => {
  res.json('add cart...');
});

// del cart
router.delete('/:id', (req, res) => {
  res.json('Nooooo cart');
});

// cart list (주문 예상 목록)
router.get('/', (req, res) => {
  res.json('cart list');
});

module.exports = router;
