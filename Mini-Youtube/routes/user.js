const express = require('express');
const router = express.Router();
const conn = require('../db');

router.use(express.json());

router.post('/login', (req, res) => {
  const {email, password} = req.body;

  let sql = `SELECT * FROM users WHERE email = ?`;
  conn.query(
    sql,
    [email],

    (err, result) => {
      let loginUser = result[0];
      if (loginUser && loginUser.password == password) {
        res.status(201).json({
          message: `${loginUser.name}님 어서오세요 ㅎㅎ`,
        });
      } else {
        res.status(404).json({
          message: `이메일 또는 비밀번호가 없습니다.`,
        });
      }
    },
  );
});

router.post('/signup', (req, res) => {
  if (req.body == {}) {
    res.status(400).json({
      message: `다시 확인해주세요 ㅜ.ㅜㅜ`,
    });
  } else {
    let sql = `INSERT INTO users (email, name, password, phone_number)
       values(?,?,?,?)`;
    const {email, name, password, phone_number} = req.body;
    conn.query(
      sql,
      [email, name, password, phone_number],

      (err, result, fields) => {
        res.status(201).json({
          message: `${name}님 환영합니다.`,
        });
      },
    );
  }
});

router
  .route('/users')

  .get((req, res) => {
    let {email} = req.body;
    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(
      sql,
      email,

      (err, result) => {
        if (result.length) {
          res.status(200).json(result);
        } else {
          res.status(404).json({
            message: '해당하는 정보가 없어요 로그인을 다시 해주세요',
          });
        }
      },
    );
  })

  .delete((req, res) => {
    const {email} = req.body;
    let sql = `DELETE FROM users WHERE email = ?`;
    conn.query(
      sql,
      [email],

      (err, result) => {
        if (result.affectedRows > 0) {
          res.status(200).json({
            message: `${email} 계정은 삭제되었습니다`,
          });
        } else {
          res.status(404).json({
            message: '해당하는 정보가 없어요 다시 확인해주세요',
          });
        }
      },
    );
  });

module.exports = router;
