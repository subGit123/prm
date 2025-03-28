// 향상/개선된 for문

const arr = [1, 2, 3, 4, 5];

// 콜백함수가 하는 일
// 객체(or 배열)에서 요소를 하나 꺼낸 다음 불림
// value , key
arr.forEach((v, k) => {
  //   console.log(v, k);
});

// Map과 forEach

let map = new Map();
map.set(7, 'seven');
map.set(9, 'nine');
map.set(8, 'eight');

map.forEach((v, k) => {
  console.log(v, k);
});
