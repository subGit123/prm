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

// REST API 설계 ===============GET=======================
app.get('/youtubers/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);

  const youtuber = db.get(id);

  if (youtuber == undefined) {
    res.status(404).json({message: '없습니다'});
  } else {
    res.json(youtuber);
  }
});

//전체 유튜버 조회 (GET/youtubers)
// req : x
// res :
app.get('/youtubers', (req, res) => {
  // 가독성 면에서 좋지 않지만 변환 과정은 없기 때문에 메모리 사용이 적음
  // var youtubers ={}
  // db.forEach((youtubers) => {
  //   youtubers[key] = youtubers
  // });

  // JSON.stringify(youtubers)

  //가독성 면에서 좋음 (하지만 변환을 하기 때문에 메모리를 많이 사용)
  const showData = Array.from(db.values());

  if (showData.length > 0) {
    res.json(showData);
  } else {
    res.status(404).json({
      message: '유튜버가 없습니다😢',
    });
  }
});

// post를 이용해서 유튜버 (data) 추가해보기!!
// 1. API 설계 (URL , Method)
// -req : params.id : Map에 저장된 key 값을 전달
// -res : map에서 id로 객체를 조회해서 전달

// 2. 유튜버 등록 => POST /youtuber
// req : body (channelTitle, sub = 0, vidoNum = 0,)
// res : channelTitle을 이용한 message 보내기

// ================POST=======================

app.post('/youtubers', (req, res) => {
  let data = req.body;

  //body값(title) 확인 후 예외 처리하기
  const channelTitle = req.body.channelTitle;
  if (channelTitle) {
    db.set(++id, data);
    res.status(201).json({
      message: `${db.get(id).channelTitle}님 유튜버 생활을 응원합니다`,
    });
  } else {
    res.status(400).json({
      message: '🚧형식을 잘 맞쳐주세요🚧',
    });
  }
});

// ================DELETE=======================

// 개별 삭제 Delete url : /youtubers/:id
// req : params.id
// res : 메시지 남기기

app.delete('/youtubers/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);

  let youtuber = db.get(id);
  if (youtuber) {
    const name = youtuber.channelTitle;
    db.delete(id);

    res.json({
      message: `${name}님 언제든 돌아오세요😁😁`,
    });
  } else {
    res.status(404).json({
      message: `요청하신 ${id}는 없습니다`,
    });
  }
});

// 전체 삭제 DELETE/youtubers
// - req : X
// - res : 메시지 남기기

app.delete('/youtubers', (req, res) => {
  var msg = '';

  if (db.size > 0) {
    //db.size >= 1
    db.clear();
    msg = '유튜버가 전부 삭제되었습니다';

    res.json({
      message: msg,
    });
  } else {
    msg = '삭제할 유튜버가 없습니다';
    res.status(404).json({
      message: msg,
    });
  }
});

// ================PUT=======================

// 개별 수정
// -req : id , body (channelTitle)
// -res : 메시지

app.put('/youtubers/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);
  let youtuber = db.get(id);
  var oldTitle = youtuber.channelTitle;

  if (youtuber == undefined) {
    res.json({
      message: `해당하는 ${youtuber}정보가 존재하지 않습니다.`,
    });
  } else {
    const data = req.body.channelTitle;

    youtuber.channelTitle = data; //수정된 타이틀
    db.set(id, youtuber);

    res.status(404).json({
      message: `${oldTitle}님 ${data}로 변경되었습니다.`,
    });
  }
});
