// promise : 약속을 지키는 객체
// 매개변수로 함수를 받음

let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('완료!!'), 3000);
});

// promise의 기본 메소드 : promise의 일이 다 끝나면 호출하는 함수
promise.then(
  // 성공시
  result => {
    console.log('너 정말 성공했니??', result);
  },

  // 실패시
  error => {},
);
