var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

dotenv.config();

// token 생성 => jwt 서명을 함 (페이로드 + 나만의 암호키 shhhhhh) + SHA256(해시 암호화 알고리즘)
var token = jwt.sign({foo: 'bar'}, process.env.PRIVATE_KEY);

// console.log(token);

// 검증
var decoded = jwt.verify(token, privatekey);
console.log(decoded); // { foo: 'bar', iat: 1740708951 }
