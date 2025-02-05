// 모듈들 호출 + 여기는 연결하는 부분

let server = require('./server');
let router = require('./router');
let resHandler = require('./resHandler');

const mariadb = require('./database/connect/mariadb');
mariadb.connect();

//서버에 매개변수로 할당 중
server.start(router.route, resHandler.handle);
