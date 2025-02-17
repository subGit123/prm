const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('server debuging...');
});

app.use(express.json()); // http 외 모듈인 `미들웨어` json 설정

// 데이터 세팅
let youtuber1 = {
  channelTitle: '십오야',
  sub: 7000000,
  videoNum: 1000,
};

let youtuber2 = {
  channelTitle: '침착맨',
  sub: 3000000,
  videoNum: 7000,
};

let youtuber3 = {
  channelTitle: 'Teo',
  sub: 2500000,
  videoNum: 1600,
};

let db = new Map();
var id = 1;

db.set(id, youtuber1);
db.set(++id, youtuber2);
db.set(++id, youtuber3);

// REST API 설계
app.get('/youtubers/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);

  const youtuber = db.get(id);

  if (youtuber === undefined) {
    res.json({message: '없습니다'});
  } else {
    res.json(youtuber);
  }
});

//전체 유튜버 조회 (GET/youtubers)
// req : x
// res :
app.get('/youtubers', (req, res) => {
  const showData = Array.from(db);
  res.json(showData);
});

// post를 이용해서 유튜버 (data) 추가해보기!!
// 1. API 설계 (URL , Method)
// -req : params.id : Map에 저장된 key 값을 전달
// -res : map에서 id로 객체를 조회해서 전달

// 2. 유튜버 등록 => POST /youtuber
// req : body (channelTitle, sub = 0, vidoNum = 0,)
// res : channelTitle을 이용한 message 보내기

app.post('/youtubers', (req, res) => {
  let data = req.body;
  console.log(data);

  db.set(++id, data);
  res.json({
    message: `${db.get(id).channelTitle}님 유튜버 생활을 응원합니다`,
  });
});
