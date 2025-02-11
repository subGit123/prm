const express = require('express');
const app = express(); //서버를 담아둠

// 서버 세팅 : 포트 넘버
app.listen(3000, () => {
  console.log('서버 실행 중...');
});

app.get(`/products/:num`, (req, res) => {
  let result = req.params.num;
  res.json({
    number: result,
  });
});
