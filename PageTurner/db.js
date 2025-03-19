const mariadb = require('mysql2/promise'); // mysql에서 promsise 객체를 사용 가능

const connection = async () => {
  const conn = await mariadb.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'pageTurner',
    dateStrings: true,
  });

  return conn;
};

module.exports = connection;
