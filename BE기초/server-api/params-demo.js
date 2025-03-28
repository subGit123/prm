const express = require('express');
const app = express(); //서버를 담아둠

// 서버 세팅 : 포트 넘버
app.listen(3000, () => {
  console.log('서버 실행 중...');
});

app.get(`/products/:num`, (req, res) => {
  let result = Number(req.params.num);
  // if (result > 10) {
  //   console.log('10보다 크네용');
  // }
  res.json({
    number: result,
  });
});

// 유튭 채널보기
app.get('/:nickname', (req, res) => {
  const youtuber = req.params;
  res.json({
    channel: youtuber.nickname,
  });
});

// 유튭 영상보기
app.get('/watch', (req, res) => {
  //객체의 비구조화 (구조 분해할당)
  const {v, t} = req.query;

  res.json({
    video: v,
    timeline: t,
  });
});

// https://www.youtube.com/@15ya_egg

// https://www.youtube.com/watch?v=nwKyTzC7THI

// https://www.youtube.com/@%EC%82%AC%EA%B8%B0%EC%B9%98%EB%8A%94%EB%83%A5%EC%9D%B4
