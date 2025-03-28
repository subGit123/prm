var figlet = require('figlet');

// 콜백 함수의 예
// 'kimnambin'(매개변수) + 콜백 함수
figlet('KimNamBin', function (err, data) {
  //익명의 함수 = 이 함수를 여기만 사용해서!!
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
