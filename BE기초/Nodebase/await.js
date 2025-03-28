// await는 async와 함께만 사용 가능!!
// await을 사용하면 promise 객체에서의 then을 더 쉽게 사용할 수 있음

const 비동기 = async () => {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('1번 완료'), 3000);
  });

  let result1 = await promise1;
  console.log(result1);

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('2번 완료'), 3000);
  });

  let result2 = await promise2;
  console.log(result2 + ' + ' + result1);

  let promise3 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('3번 완료'), 3000);
  });

  let result3 = await promise3;
  console.log(result3 + ' + ' + result2 + ' + ' + result1);
};

비동기();
