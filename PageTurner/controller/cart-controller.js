const conn = require('../db');
const {StatusCodes} = require('http-status-codes');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();

// 카트 추가
const addCart = (req, res) => {
  const {cart_book_id, quantity} = req.body;

  let loginUserID = ensureAuthrizaion(req, res);

  if (ensureAuthrizaion instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: '로그인 세센이 완료. 다시 로그인 필요',
    });
  } else if (ensureAuthrizaion instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '토큰 이상 감지',
    });
  } else {
    let sql = `INSERT INTO cartItems (cart_book_id, quantity, cart_user_id) VALUES (?, ?, ?);`;
    let values = [cart_book_id, quantity, loginUserID.id];
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
  }
};

// 장바구니 조회 + 예상 장바구니 목록 조회
const getCart = (req, res) => {
  const {seleted} = req.body;

  let loginUserID = ensureAuthrizaion(req, res);

  if (ensureAuthrizaion instanceof jwt.TokenExpiredError) {
    return res.status(StatusCodes.UNAUTHORIZED).json({
      message: '로그인 세센이 완료. 다시 로그인 필요',
    });
  } else if (ensureAuthrizaion instanceof jwt.JsonWebTokenError) {
    return res.status(StatusCodes.BAD_REQUEST).json({
      message: '토큰 이상 감지',
    });
  } else {
    let sql = `
    SELECT cartItems.id, cart_book_id, title, summary, quantity, price 
    FROM cartItems LEFT JOIN books 
    ON cartItems.cart_book_id = books.id
    WHERE cart_user_id = ? 
    AND  cartItems.id IN(?)`;

    conn.query(
      sql,
      [loginUserID.id, seleted],

      (err, result) => {
        if (err) {
          return res.status(StatusCodes.BAD_REQUEST).end();
        }

        return res.status(StatusCodes.OK).json(result);
      },
    );
  }
};

// 장바구니 삭제
const removeCartItem = (req, res) => {
  const cart_id = req.params.id;
  // let loginUserID = ensureAuthrozaion(req);

  let sql = `
  DELETE FROM cartItems WHERE id = ?`;

  conn.query(
    sql,
    cart_id,

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.OK).json(result);
    },
  );
};

function ensureAuthrizaion(req, res) {
  try {
    let receivedJWT = req.headers['authorization'];
    let decodedJWT = jwt.verify(receivedJWT, `${process.env.PRIVATE_KEY}`);

    return decodedJWT;
  } catch (e) {
    console.log(e);

    return e;
  }
}

module.exports = {addCart, getCart, removeCartItem};

// JWT expires

// ensureAuthrozaion 모듈화

// 장바구니 목록 조회 => 내 장바구니 보기
// (현재는 전체가 보임)
