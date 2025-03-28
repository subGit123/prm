const express = require('express');
const app = express(); //서버를 담아둠

// 서버 세팅 : 포트 넘버
app.listen(3000, () => {
  console.log('서버 실행 중...');
});

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

// 유튭 채널보기
app.get('/:nickname', (req, res) => {
  const {nickname} = req.params;

  if (nickname == '15ya_egg') {
    res.json(youtuber1);
  } else if (nickname == 'ChimChakMan_Official') {
    res.json(youtuber2);
  } else {
    res.json({
      message: '저희가 모르는 유튜버입니다.',
    });
  }
});
