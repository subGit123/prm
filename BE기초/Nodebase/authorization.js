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
  const token = jwt.sign(
    {
      username: 'kim bobu',
    },
    process.env.PRIVATE_KEY,
    {
      expiresIn: '1m',
      issuer: 'admin',
    },
  );

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

  // 유효 시간이 지난 경우 or jwt 인증되지 못한 토큰인 경우
  // 예외(개발자가 생각하지 못한 에러) 처리
  // = 로그인 인증 세션이 완료되었습니다. 다시 로그인 하세요. =

  res.send('decoded :', decoded);
});

try {
  // 정상적으로 실행되는 로직
} catch (e) {
  // 에러를 처리하는 로직
}
