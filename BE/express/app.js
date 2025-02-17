const express = require('express');
const app = express();
const port = 1234;

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});

app.get('/', (req, res) => {
  res.send('success get method');
});

//body로 받은 data 세팅
app.use(express.json());

//body로 받은 data 뿌려주기
app.post('/test', (req, res) => {
  const showData = req.body;

  res.json(showData);
});
