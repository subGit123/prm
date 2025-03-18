const conn = require('../db');
const {StatusCodes} = require('http-status-codes');

// 카트 추가
const addCart = (req, res) => {
  const {cart_book_id, quantity, cart_user_id} = req.body;

  let sql = `INSERT INTO cartItems (cart_book_id, quantity, cart_user_id) VALUES (?, ?, ?);`;
  let values = [cart_book_id, quantity, cart_user_id];
  conn.query(
    sql,
    values,

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }
      return res.status(StatusCodes.OK).json(result);
    },
  );
};

// 장바구니 조회 + 예상 장바구니 목록 조회
const getCart = (req, res) => {
  const {cart_user_id, seleted} = req.body;

  let sql = `
      SELECT cartItems.id, cart_book_id, title, summary, quantity, price 
      FROM cartItems LEFT JOIN books 
      ON cartItems.cart_book_id = books.id
      WHERE cart_user_id = ? 
      AND  cartItems.id IN(?)`;

  conn.query(
    sql,
    [cart_user_id, seleted],

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.OK).json(result);
    },
  );
};

// 장바구니 삭제
const removeCartItem = (req, res) => {
  const {id} = req.params;

  let sql = `
  DELETE FROM cartItems WHERE id = ?`;

  conn.query(
    sql,
    id,

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.OK).json(result);
    },
  );
};

module.exports = {addCart, getCart, removeCartItem};
