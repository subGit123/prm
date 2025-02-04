// 모듈들 호출

let server = require('./server');
let router = require('./router');
let resHandler = require('./resHandler');

//서버에 매개변수로 할당 중
server.start(router.route, resHandler.handle);
