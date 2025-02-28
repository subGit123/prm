const express = require('express');
const router = express.Router();
const conn = require('../db');
const {body, validationResult} = require('express-validator');

// jwt 모듈
const jwt = require('jsonwebtoken');

// .env 모듈
const dotenv = require('dotenv');
dotenv.config();

router.use(express.json());

const validation = (req, res, next) => {
  const err = validationResult(req);

  if (err.isEmpty()) {
    return next();
  } else {
    return res.status(400).json(err.array());
  }
};

// 로그인=====================
router.post(
  '/login',
  [
    body('email')
      .notEmpty()
      .isString()
      .isEmail()
      .withMessage('이메일 입력해주세요'),

    body('password').notEmpty().isString().withMessage('비밀번호 필요'),
    validation,
  ],
  (req, res) => {
    const {email, password} = req.body;

    let sql = `SELECT * FROM users WHERE email = ?`;
    conn.query(
      sql,
      [email],

      (err, result) => {
        if (err) {
          return res.status(400).end();
        }
        let loginUser = result[0];
        if (loginUser && loginUser.password == password) {
          // jwt token 발급
          const token = jwt.sign(
            {
              email: loginUser.email,
              name: loginUser.name,
            },
            process.env.PRIVATE_KEY,
            //유효기간 설정하기
            {expiresIn: '30m', issuer: 'kim'},
          );

          // 로그인 정보 쿠키에 담기 (token이라는 상자에 token을 담기)
          // 여러개를 담을 수 있기 때문
          res.cookie('token', token, {
            //api 호출만 허용하겠다
            httpOnly: true,
          });

          res.status(201).json({
            message: `${loginUser.name}님 어서오세요 ㅎㅎ`,
          });
        } else {
          res.status(403).json({
            message: `이메일 또는 비밀번호가 없습니다.`,
          });
        }
      },
    );
  },
);

// 회원가입=====================
router.post(
  '/signup',
  [
    body('email')
      .notEmpty()
      .isString()
      .isEmail()
      .withMessage('이메일 입력해주세요'),

    body('name').notEmpty().isString().withMessage('name 필요'),
    body('password').notEmpty().isString().withMessage('비밀번호 필요'),
    body('phone_number').notEmpty().isString().withMessage('phone_number 필요'),
    validation,
  ],
  (req, res) => {
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

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
          res.status(201).json({
            message: `${name}님 환영합니다.`,
          });
        },
      );
    }
  },
);

router
  .route('/users')

  // 회원 정보 조회=====================
  .get(
    [
      body('email')
        .notEmpty()
        .isString()
        .isEmail()
        .withMessage('이메일 입력해주세요'),
    ],
    (req, res) => {
      let {email} = req.body;
      let sql = `SELECT * FROM users WHERE email = ?`;
      conn.query(
        sql,
        email,

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
          if (result.length) {
            res.status(200).json(result);
          } else {
            res.status(404).json({
              message: '해당하는 정보가 없어요 로그인을 다시 해주세요',
            });
          }
        },
      );
    },
  )

  // 삭제=====================
  .delete(
    [
      body('email')
        .notEmpty()
        .isString()
        .isEmail()
        .withMessage('이메일 입력해주세요'),

      validation,
    ],
    (req, res) => {
      const {email} = req.body;
      let sql = `DELETE FROM users WHERE email = ?`;
      conn.query(
        sql,
        [email],

        (err, result) => {
          if (err) {
            return res.status(400).end();
          }
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
    },
  );

module.exports = router;
