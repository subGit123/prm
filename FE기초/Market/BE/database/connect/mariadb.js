//mysql + NodeJS 연결

const mariadb = require('mysql');

// mariadb 연결하기
const conn = mariadb.createConnection({
  host: 'localhost', //마리아디비 주소

  //maridb 설치할 때 설정했던 것들
  port: 3306,
  user: 'root',
  password: 'root',
  database: 'tennis',
});

module.exports = conn;
