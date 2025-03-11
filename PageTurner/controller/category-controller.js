const conn = require('../db');
const {StatusCodes} = require('http-status-codes');

// category
const all_category = (req, res) => {
  let sql = `SELECT * FROM category`;
  conn.query(sql, (err, result) => {
    if (err) {
      return res.status(StatusCodes.BAD_REQUEST).end();
    }

    return res.status(StatusCodes.OK).json(result);
  });
};

// book 테이블과 join

// SELECT * FROM books JOIN category ON books.category_id = category.id;

module.exports = {all_category};
