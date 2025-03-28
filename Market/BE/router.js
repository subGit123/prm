// 경로 담당

function route(pathname, handle, res, productId) {
  // console.log(`pathname은 ${pathname}`); //포트번호 뒤에 오는 경로
  console.log(`프로덕트 아디디은 ${productId}`);
  if (typeof handle[pathname] === 'function') {
    //handle에 맞게 역할 부여 (함수로 사용할 것)
    handle[pathname](res, productId);
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'}); //이곳이 head 부분
    res.write('⚠️Not Found⚠️');
    res.end();
  }
}

exports.route = route;
