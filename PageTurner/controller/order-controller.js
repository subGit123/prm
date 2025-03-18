const conn = require('../db');
const {StatusCodes} = require('http-status-codes');

const order = (req, res) => {
  const {
    items,
    delivery,
    total_quantity,
    total_price,
    user_id,
    first_book_title,
  } = req.body;

  let delivery_id = 2; // 배달정보 가져오기
  let order_id; // 주문 정보

  let sql = `INSERT INTO delivery (address, receiver , contact) VALUES (? , ? , ?)`;
  let values = [delivery.address, delivery.receiver, delivery.contact];

  sql = `INSERT INTO orders (book_title , total_quantity , total_price , user_id , delivery_id)
           VALUES (? , ? , ? , ? , ?)`;

  values = [
    first_book_title,
    total_quantity,
    total_price,
    user_id,
    delivery_id,
  ];

  conn.query(
    sql,
    values,

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      order_id = result.insertId;

      return res.status(StatusCodes.OK).json(result);
    },
  );

  sql = `INSERT INTO ordered_book (order_id, book_id , quantity) 
        VALUES ? `;
  console.log('values', order_id);

  // items(장바구니 정보) 안에 요소들을 하나씩 꺼내서 values 만들기
  values = [];
  items.forEach(v => {
    values.push([order_id, v.book_id, v.quantity]);
    console.log('values', values);
  });

  conn.query(
    sql,
    [values],

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.OK).json(result);
    },
  );
};

const get_order = (req, res) => {
  res.json('order list');
};

const get_order_detail = (req, res) => {
  res.json('order detail list');
};

module.exports = {order, get_order, get_order_detail};
