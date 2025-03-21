const express = require('express');
const app = express();
const port = 3000;
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');
dotenv.config();

app.listen(port, () => {
  console.log(`서버 실행 중... http://localhost:${port}`);
});

// GET + JWT 토큰 발행
app.get('/jwt', (req, res) => {
  var token = jwt.sign({foo: 'bar'}, `${process.env.PRIVATE_KEY}`);

  res.cookie('JWT', token, {
    httpOnly: true,
  });

  console.log(token);

  res.send('Token success');
});

// GET + JWT/decoded 토큰 검증
app.get('/jwt/decoded', (req, res) => {
  let received_jwt = req.headers['authorization'];
  console.log('우리가 전달받은 jwt', received_jwt);
  var decoded = jwt.verify(received_jwt, `${process.env.PRIVATE_KEY}`);

  res.send('decoded :', decoded);
});
