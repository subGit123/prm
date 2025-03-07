const express = require('express');
const router = express.Router();

router.use(express.json());

// write orders
router.post('/', (req, res) => {
  res.json('sucess order');
});

// select orders
router.get('/', (req, res) => {
  res.json('order list');
});

// select detail orders
router.get('/:order_id', (req, res) => {
  res.json('order detail list');
});

// // delivery
// router.get('/delivery', (req, res) => {
//   res.json('delivery');
// });

// // payment
// router.post('/orderedBook', (req, res) => {
//   res.json('money pay');
// });

module.exports = router;
