// promise 객체를 더 쉽게 사용하는 문법
// 비동기 처리를 쉽게 할 수 있음
// 첫번째 기능 : promise 객체를 알아서 만들어 줌
const promise = async () => {
  return 7;
  // return Promise.resolve(7); promise 객체와 동일한 결과
};

promise().then(result => {
  console.log('완료!!', result);

  error => {
    console.log('실패', error);
  };
});
