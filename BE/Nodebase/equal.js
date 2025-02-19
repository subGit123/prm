// == 과 === 의 차이

if (1 == '1') {
  console.log('같다');
} else {
  console.log('같지 않다');
}

if (1 === '1') {
  console.log('같다');
} else {
  console.log('같지 않다');
}

// 강한 비교와 약한 비교
// == 은 값만 비교하고
// ===은 값 + 타입까지 비교
