const express = require('express');
const app = express();

app.listen(3333, () => {
  console.log('server debuging...');
});

// 데이터 세팅
let youtuber1 = {
  channelTitle: '십오야',
  sub: 7000000,
  vidoNum: 1000,
};

let youtuber2 = {
  channelTitle: '침착맨',
  sub: 3000000,
  vidoNum: 7000,
};

let youtuber3 = {
  channelTitle: 'Teo',
  sub: 2500000,
  vidoNum: 1600,
};

let db = new Map();
db.set(1, youtuber1);
db.set(2, youtuber2);
db.set(3, youtuber3);

// REST API 설계
app.get('/youtuber/:id', (req, res) => {
  let {id} = req.params;
  id = Number(id);

  const youtuber = db.get(id);

  if (youtuber === undefined) {
    res.json({message: '없습니다'});
  } else {
    res.json(youtuber);
  }
});
