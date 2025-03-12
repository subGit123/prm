const conn = require('../db');
const {StatusCodes} = require('http-status-codes');

//도서 전체 조회 + category
const all_books = (req, res) => {
  let {category_id} = req.query;

  // category
  if (category_id) {
    let sql = `SELECT * FROM books 
    WHERE category_id = ?`;
    conn.query(
      sql,
      id,

      (err, result) => {
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
  }
  //all book
  else {
    let sql = `SELECT * FROM books`;
    conn.query(sql, (err, result) => {
      if (err) {
        return res.status(StatusCodes.BAD_REQUEST).end();
      }

      return res.status(StatusCodes.OK).json(result);
    });
  }
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
