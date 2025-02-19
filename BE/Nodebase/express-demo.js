const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`서버 실행 중...http://localhost/${port}`);
});

const fruits = [
  {
    id: 1,
    name: 'apple',
  },
  {
    id: 2,
    name: 'orange',
  },
  {
    id: 3,
    name: 'strawberry',
  },
  {
    id: 4,
    name: 'blueberry',
  },
];

// 과일 전체 조회
app.get('/fruits', (req, res) => {
  res.json(fruits);
});

// 과일 개별 조회
app.get('/fruits/:id', (req, res) => {
  let id = req.params.id;

  // const data = fruits[id - 1]
  const data = fruits.find(v => v.id == id);

  if (!data) {
    res.status(404).json({
      message: '찾으시는 id의 과일이 없습니다',
    });
  }
  res.json(data);
});
