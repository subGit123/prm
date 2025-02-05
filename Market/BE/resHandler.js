// 루트에 맞게 할 일 처리

const mariadb = require('./database/connect/mariadb');

//데이터를 화면에 보여주는 모듈 file Sync
const fs = require('fs');
const main_view = fs.readFileSync('../main.html', 'utf-8');
const orderlist_view = fs.readFileSync('../orderlist.html', 'utf-8');

const main = res => {
  console.log(`현재 경로는 main`);

  //마리아디비 데이터 불러오기
  mariadb.query(
    'select * from product',
    //데이터를 불러오고 담을 것
    function (error, results) {
      console.log('마리아디비엔 이게 담겨 있엉', results);
    },
  );

  res.writeHead(200, {'Content-Type': 'text/html'}); //이곳이 head 부분
  res.write(main_view);
  res.end();
};

const redRacket = res => {
  //이미지 불러오기
  fs.readFile('../img/redRacket.png', function (err, img) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(img);
    res.end();
  });
};

const blueRacket = res => {
  //이미지 불러오기
  fs.readFile('../img/blueRacket.png', function (err, img) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(img);
    res.end();
  });
};

const blackRacket = res => {
  //이미지 불러오기
  fs.readFile('../img/blackRacket.png', function (err, img) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(img);
    res.end();
  });
};

const order = (res, productId) => {
  console.log('productId는', productId);
  mariadb.query(
    'insert into orderlist values( ' +
      productId +
      ',' +
      new Date().toLocaleDateString +
      '  )',

    function (error, results) {
      console.log('마리아디비엔 이게 담겨 있엉', results);
    },
  );

  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(main_view);
  res.end();
};

const orderlist = res => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  mariadb.query(
    'select * from orderlist',

    function (error, results) {
      res.write(orderlist_view);

      results.forEach(e => {
        res.write(
          '<tr>' +
            '<td>' +
            e.id +
            '</td>' +
            '<td>' +
            e.order_date +
            '</td>' +
            '</tr>',
        );
      });
      res.write('</table>');
      res.end();
    },
  );
};

let handle = {};
handle['/'] = main;
handle['/order'] = order;
handle['/orderlist'] = orderlist;

//이미지 경로를 `url`로 인식하고 있기 때문에 `파일 경로`로 수정
handle['/img/redRacket.png'] = redRacket;
handle['/img/blueRacket.png'] = blueRacket;
handle['/img/blackRacket.png'] = blackRacket;

exports.handle = handle;
