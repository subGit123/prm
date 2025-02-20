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

// {
//     "userId" : " cat",
//     "pw" : 1234,
//     "name" : "고양이이"
//   }
//   {
//     "userId" : " 79blog",
//     "pw" : 1234,
//     "name" : "칠구 블로그"
//   }
// ================= API 설계 ===================

// 로그인
app.post('/login', (req, res) => {
  const {userId, pw} = req.body;

  // userId와 pw가 맞는지 확인
  db.forEach((v, i) => {
    if (v.userId == userId && v.pw == pw)
      res.status(201).json({
        message: `${userId}님 어서오세요 ㅎㅎ`,
      });
    else if (v.userId != userId) {
      res.status(404).json({
        message: `ID를 다시 확인해주세요`,
      });
    } else {
      res.status(404).json({
        message: `pw 다시 확인해주세요`,
      });
    }
  });
});
// 객체가 빈 걸로 확인하는 방법====================
//   let loginData = {};

//   // 사용자 찾기
//   db.forEach(v => {
//     if (v.userId === userId) {
//       loginData = v;
//     }
//   });

//   if (!isEmpty(loginData)) {
//     console.log('아이디 맞음');

//     //pw
//     if (loginData.pw === pw) {
//       console.log('비밀번호 맞다');
//     } else {
//       console.log('비밀번호 아니다');
//     }
//   } else {
//     console.log('입력하신 아이디는 없습니다.');
//   }
// });

// const isEmpty = obj => {
//   if (Object.keys(obj).length === 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

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
