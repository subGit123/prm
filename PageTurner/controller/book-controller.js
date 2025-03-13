const conn = require('../db');
const {StatusCodes} = require('http-status-codes');

//도서 전체 조회 + category별 조회 + category별 신간 조회
const all_books = (req, res) => {
  let {category_id, new_book, limit, currentPage} = req.query;

  let offset = limit * (currentPage - 1);

  let sql = `SELECT * FROM books `;
  let values = [];

  if (category_id && new_book) {
    sql += ` WHERE category_id=? AND pub_date 
    BETWEEN DATE_SUB(NOW() , INTERVAL 1 MONTH)
    AND NOW() `;
    values = [Number(category_id)];
  } else if (category_id) {
    sql += `WHERE category_id=? `;
    values = [category_id];
  } else if (new_book) {
    sql += ` WHERE pub_date 
    BETWEEN  DATE_SUB(NOW() , INTERVAL 1 MONTH)
    AND NOW() `;
  }
  sql += `LIMIT ? OFFSET ?`;
  values.push(Number(limit), offset);

  conn.query(
    sql,
    values,

    (err, result) => {
      console.log(sql, values);
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      if (result.length) {
        return res.status(StatusCodes.OK).json(result);
      } else {
        return res.status(StatusCodes.NOT_FOUND).end();
      }
    },
  );
};

// book detail
const book_detail = (req, res) => {
  let {id} = req.params;
  //   id = Number(id);

  let sql = `SELECT * FROM pageTurner.books 
    LEFT JOIN  pageTurner.category ON books.category_id = category.id
    WHERE books.id = ?`;
  conn.query(
    sql,
    id,

    (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      if (result[0]) {
        return res.status(StatusCodes.OK).json(result);
      } else {
        return res.status(StatusCodes.NOT_FOUND).end();
      }
    },
  );
};

module.exports = {
  all_books,
  book_detail,
};
