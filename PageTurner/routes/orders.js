const express = require('express');
const router = express.Router();
const {
  order,
  get_order,
  get_order_detail,
} = require('../controller/order-controller');

router.use(express.json());

// write orders
router.post('/', order);

// select orders
router.get('/', get_order);

// select detail orders
router.get('/:order_id', get_order_detail);

// // delivery
// router.get('/delivery', (req, res) => {
//   res.json('delivery');
// });

// // payment
// router.post('/orderedBook', (req, res) => {
//   res.json('money pay');
// });

module.exports = router;
