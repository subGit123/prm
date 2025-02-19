const express = require('express');
const app = express();
const port = 7777;
app.use(express.json()); //미들웨어 설정 (외부 모듈을 사용하기 위함)

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

// ================ DB seting==========================

let db = new Map();
var id = 0;
// ================= API 설계 ===================

// 로그인
app.post('/login', (req, res) => {
  res.json({
    hi: 'hi',
  });
});

// 회원가입
app.post('/signup', (req, res) => {
  db.set(++id, req.body);

  const singupName = db.get(id).name;
  const dbName = req.body.name;

  if (singupName == dbName) {
    res.status(201).json({
      message: `${db.get(id).name}님 환영합니다`,
    });
  } else {
    res.status(400).json({
      message: `⚠️회원가입에 실패했습니다
                    다시 확인해주세요 ⚠️`,
    });
  }
});

// 마이페이지 + 회원 탈퇴
app
  .route('/users/:id')

  // 마이페이지
  .get((req, res) => {
    let {id} = req.params;
    id = Number(id);
    const userData = db.get(id);

    if (userData) {
      res.status(200).json({
        userId: `${userData.userId}`,
        pw: `${userData.pw}`,
        name: `${userData.name}`,
      });
    } else {
      res.status(401).json({
        message: '해당하는 정보가 없어요 로그인을 다시 해주세요',
      });
    }
  })

  //회원 탈퇴
  .delete((req, res) => {
    let {id} = req.params;
    id = Number(id);
    const userData = db.get(id);

    if (userData) {
      db.delete(id);
      res.status(200).json({
        message: `${userData.name}님 그동안 감사했습니다👍👍`,
      });
    } else {
      res.status(401).json({
        message: '해당하는 정보가 없어요 다시 확인해주세요',
      });
    }
  });
