// Request 받는 담당 중

// require : NodeJS의 모듈 (모듈을 불러오는 역할을 함)
let http = require('http');
let url = require('url');

//시작 함수 만들기
const start = (route, handle) => {
  function onRequest(req, res) {
    let pathname = url.parse(req.url).pathname; // url 경로 불러오기

    route(pathname, handle, res); //router.js의 route함수에게 할당
  }

  http.createServer(onRequest).listen(8888, () => {
    console.log(`서버가 실행중.... `);
  });
};

exports.start = start;
