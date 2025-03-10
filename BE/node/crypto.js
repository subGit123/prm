const crypto = require('crypto');

const password = '1111';

//비밀번호 암호화
const salt = crypto.randomBytes(64).toString('base64');
const hashPW = crypto
  .pbkdf2Sync(password, salt, 10000, 10, 'sha512')
  .toString('base64');

console.log(hashPW);

// 회원가입 => 암호화된 비밀번호 + salt 값 같이 저장

// 로그인 시 => 비밀번호를 salt와 비교 + DB 비밀번호 비교
