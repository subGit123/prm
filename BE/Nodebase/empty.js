// 빈 객체 확인 + 모듈화

const obj1 = {};
const obj2 = {message: '안 빔'};

const isEmpty = obj => {
  if (Object.keys(obj).length === 0) {
    return true;
  } else {
    return false;
  }
};

// console.log(Object.keys(obj1).length === 0); // true
// console.log(Object.keys(obj2).length === 0); // false

console.log(isEmpty(obj1)); // true
console.log(isEmpty(obj2)); // false

const num = 1;
const str = '1'; //문자열도 객체

console.log(isEmpty(num)); // true
console.log(isEmpty(str)); // false
