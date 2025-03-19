// const conn = require('../db');
const mariadb = require('mysql2/promise');
const {StatusCodes} = require('http-status-codes');

const order = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pageTurner',
    dateStrings: true,
  });

  const {
    items,
    delivery,
    total_quantity,
    total_price,
    user_id,
    first_book_title,
  } = req.body;

  let delivery_id; // 배달정보 가져오기
  let order_id; // 주문 정보

  let sql = `INSERT INTO delivery (address, receiver , contact) VALUES (? , ? , ?)`;
  let values = [delivery.address, delivery.receiver, delivery.contact];

  let [results] = await conn.query(sql, values);
  // 밑에 내용을 results에 담아줌
  // (err, result) => {
  //   if (err) {
  //     return res.status(StatusCodes.BAD_REQUEST).end();
  //   }

  //   delivery_id = result.insertId;
  //   console.log('딜리버리 테이블', result.insertId);
  //   console.log('딜리버리 테이블', delivery_id);
  // },

  sql = `INSERT INTO orders (book_title , total_quantity , total_price , user_id , delivery_id)
           VALUES (? , ? , ? , ? , ?)`;

  values = [
    first_book_title,
    total_quantity,
    total_price,
    user_id,
    // delivery_id,
    results.insertId,
  ];

  // TODO : 내가 해본 것

  let [feild] = await conn.query(sql, values);
  // (err, result) => {
  //   if (err) {
  //     return res.status(StatusCodes.BAD_REQUEST).end();
  //   }

  //   order_id = result.insertId;
  // },

  sql = `INSERT INTO ordered_book (order_id, book_id , quantity) 
        VALUES ? `;

  // items(장바구니 정보) 안에 요소들을 하나씩 꺼내서 values 만들기
  values = [];
  items.forEach(v => {
    values.push([feild.insertId, v.book_id, v.quantity]);
  });

  let [answer] = await conn.query(sql, [values]);
  // (err, result) => {
  //   if (err) {
  //     return res.status(StatusCodes.BAD_REQUEST).end();
  //   }

  //   return res.status(StatusCodes.OK).json(result);
  // },
};

const get_order = (req, res) => {
  res.json('order list');
};

const get_order_detail = (req, res) => {
  res.json('order detail list');
};

module.exports = {order, get_order, get_order_detail};
