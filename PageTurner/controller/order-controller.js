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

  // delivery Table
  let sql = `INSERT INTO delivery (address, receiver , contact) VALUES (? , ? , ?)`;
  let values = [delivery.address, delivery.receiver, delivery.contact];

  let [results] = await conn.execute(sql, values);
  delivery_id = results.insertId;

  // orders Table
  sql = `INSERT INTO orders (book_title , total_quantity , total_price , user_id , delivery_id)
           VALUES (? , ? , ? , ? , ?)`;

  values = [
    first_book_title,
    total_quantity,
    total_price,
    user_id,
    delivery_id,
  ];

  [results] = await conn.execute(sql, values);
  order_id = results.insertId;

  // items를 가지고 카트 아이디 가져오기
  sql = `SELECT cart_book_id , quantity FROM cartItems WHERE id IN (?)`;
  let [orderItems, fields] = await conn.query(sql, [items]);

  // ordered Book Table
  sql = `INSERT INTO ordered_book (order_id, book_id , quantity) VALUES ?`;

  // items(장바구니 정보) 안에 요소들을 하나씩 꺼내서 values 만들기
  values = [];
  orderItems.forEach(v => {
    values.push([order_id, v.cart_book_id, v.quantity]);
  });

  results = await conn.query(sql, [values]);

  // cartItems 삭제
  let result = deleteCartItems(conn, items);

  return res.status(StatusCodes.OK).json(result);
};

const deleteCartItems = async (conn, items) => {
  let sql = `DELETE FROM cartItems WHERE id IN (?)`;

  // WHERE과 IN은 excute를 사용 x -> query 사용 o
  let result = await conn.query(sql, [items]);
  console.log(items);
  return result;
};

const get_order = async (req, res) => {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pageTurner',
    dateStrings: true,
  });

  let sql = `SELECT orders.id, created_at, address, receiver, contact, 
            book_title, total_price, total_quantity
            FROM orders LEFT JOIN delivery 
            ON orders.delivery_id = delivery.id;`;

  let [rows, fileds] = await conn.query(sql);
  return res.status(StatusCodes.OK).json(rows);
};

const get_order_detail = async (req, res) => {
  const {id} = req.params;
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pageTurner',
    dateStrings: true,
  });

  let sql = `SELECT book_id , title , author , price , quantity 
  FROM ordered_book LEFT JOIN books ON ordered_book.book_id = books.id 
  WHERE order_id = ?`;

  let [rows, fileds] = await conn.query(sql, id);
  return res.status(StatusCodes.OK).json(rows);
};

module.exports = {order, get_order, get_order_detail};
