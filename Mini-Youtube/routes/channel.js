const express = require('express');
const router = express.Router();
const conn = require('../db');
const {body, param, validationResult} = require('express-validator');

router.use(express.json());

const validation = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    // 다음 할 일 찾아가기
    return next();
  } else {
    return res.status(400).json(err.array());
  }
};

router
  .route('/')

  .post(
    [
      body('user_id')
        .notEmpty()
        .isInt()
        .withMessage('user_id는 숫자로 입력해주세요'),
      body('name')
        .notEmpty()
        .isString()
        .withMessage('채널 이름은 문자로 입력해주세요'),
      validation,
    ],

    (req, res, next) => {
      const {name, user_id} = req.body;
      let sql = `INSERT INTO channels (name , user_id) VALUES  (?,?) `;

      conn.query(
        sql,
        [name, user_id],

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
          if (result.affectedRows > 0) {
            res.status(201).json({message: `${name}님 환영합니다 ㅎㅎ`});
          } else {
            return res.status(400).end();
          }
        },
      );
    },
  )

  .get(
    [
      body('user_id')
        .notEmpty()
        .isInt()
        .withMessage('user_id는 숫자로 입력해주세요'),
      validation,
    ],
    (req, res) => {
      let {user_id} = req.body;

      let sql = `SELECT *  FROM channels WHERE user_id = ? `;

      conn.query(
        sql,
        user_id,

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
          if (result.length) {
            res.status(200).json(result);
          } else {
            return res.status(400).end();
          }
        },
      );
    },
  );

router
  .route('/:id')
  .put(
    [
      param('id').notEmpty().withMessage('채널 id 필요'),
      body('name').notEmpty().isString().withMessage('채널명 오류'),
      validation,
    ],

    (req, res) => {
      let {id} = req.params;
      id = parseInt(id);
      let {name} = req.body;

      let sql = `UPDATE channels SET name = ? WHERE id = ? `;
      let values = [name, id];
      if (id) {
        conn.query(
          sql,
          values,

          (err, result) => {
            if (err) {
              return res.status(400).end();
            }
            if (result.affectedRows > 0) {
              res.status(200).json({
                message: `${name}로 변경되었습니다`,
              });
            } else {
              return res.status(400).end();
            }
          },
        );
      }
    },
  )

  .delete(
    [param('id').notEmpty().isInt().withMessage('아이디 오류'), validation],
    (req, res) => {
      let {id} = req.params;
      id = Number(id);

      if (id) {
        let sql = `DELETE FROM channels WHERE id = ?`;
        conn.query(
          sql,
          id,

          (err, result) => {
            if (err) {
              return res.status(400).end();
            }
            if (result.affectedRows > 0) {
              res.status(200).json({
                message: `그동안 감사했습니다`,
              });
            } else {
              return res.status(400).end();
            }
          },
        );
      }
    },
  )

  .get(
    [param('id').notEmpty().withMessage('채널 id 필요'), validation],

    (req, res) => {
      let {id} = req.params;
      id = Number(id);

      let sql = `SELECT *  FROM channels WHERE id = ?`;
      conn.query(
        sql,
        id,

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
          if (result.length) {
            res.status(200).json(result);
          } else {
            return res.status(400).end();
          }
        },
      );
    },
  );

const Notmsg = res => {
  res.status(404).json({message: `조회되는 유튜버가 없습니다🥲🥲`});
};

module.exports = router;
