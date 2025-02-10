let http = require('http'); //내장 모듈

const onRequest = (req, res) => {
  res.writeHead(200, {'content-type': 'text/html'});
  res.write('NodeJS');
  res.end();
};

http.createServer(onRequest).listen(1111);
// 실행 순서
// 1. http 모듈 (createServer) 사용
// 2. onRequest 콜백 함수 실행
