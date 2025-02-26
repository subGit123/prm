// mysql 패키지를 가져옵니다.
const mysql = require('mysql2');

// 데이터베이스 연결 설정
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Youtube',
  dateStrings: true,
});

// 데이터베이스에 연결
connection.connect(err => {
  if (err) {
    console.error('데이터베이스 연결 실패: ' + err.stack);
    return;
  }
  console.log('데이터베이스에 연결됨😁😁');
});

// query
// connection.query(
//   'SELECT * FROM `users`',

//   (err, result, fields) => {
//     // 구조 분해 할당
//     const {id, email, name, created_at} = result[0];

//     console.log(id);
//     console.log(email);
//     console.log(name);
//     console.log(created_at);
//   },
// );

module.exports = connection;
