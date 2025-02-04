// 루트에 맞게 할 일 처리

const main = res => {
  console.log(`현재 경로는 main`);

  res.writeHead(200, {'Content-Type': 'text/html'}); //이곳이 head 부분
  res.write('Main 페이지임');
  res.end();
};

const login = res => {
  console.log(`현재 경로는 login`);

  res.writeHead(200, {'Content-Type': 'text/html'}); //이곳이 head 부분
  res.write('Login 페이지임');
  res.end();
};

let handle = {};
handle['/'] = main;
handle['/login'] = login;

exports.handle = handle;
