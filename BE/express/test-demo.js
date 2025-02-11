const express = require('express');
const app = express(); //서버를 담아둠

app.get('/main', (req, res) => {
  res.send('This is Main page');
});

app.get('/main/01', (req, res) => {
  res.send('This is Main page01');
});

app.listen(3000, () => {
  console.log('서버 실행 중...');
});
