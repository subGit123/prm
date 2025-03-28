const express = require('express');
const app = express(); //서버를 담아둠

// 서버 세팅 : 포트 넘버
app.listen(3000, () => {
  console.log('서버 실행 중...');
});

app.get('/hello', (req, res) => {
  res.json({
    say: '안녕하세요',
  });
});

app.get('/bye', (req, res) => {
  res.json({
    say: '오케이 바이',
  });
});

app.get('/nicetomeetu', (req, res) => {
  res.json({
    say: '안녕하세요 감사해요 잘있어요 다시 만나요',
  });
});
