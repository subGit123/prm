// a,b 인자를 받아서 덧셈하고 결과물을 리턴 함수

// JS
function plus(a, b) {
  return a + b;
}

console.log(plus(4, 2));

// TS
function ts_plus(a: number, b: number) {
  return a + b;
}

// console.log(ts_plus('4', 2));
// 자바스크립트에서는 가능하지만 TS에서는 불가능

console.log(ts_plus(4, 2));
