const express = require('express');
// const {book} = require('./object-demo');
const app = express(); //서버를 담아둠

let book = {
  title: 'NodeJS를 배워보자',
  price: 20000,
  des: '이 책 왜 좋음??',
};

// 서버 세팅 : 포트 넘버
app.listen(3000, () => {
  console.log('서버 실행 중...');
});

// =================API======================

// GET 메소드로 '/' 요청이 오면
// 매개변수로 전달받은 콜백함수('hello express')를 호출함
app.get('/', function (req, res) {
  res.send('hello express');
});

app.get('/products/1', (req, res) => {
  res.json(book.title);
});
