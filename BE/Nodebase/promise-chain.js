let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('완료!!'), 3000);
})
  .then(
    // 성공시
    result => {
      console.log(result);
      return result + '너 정말 성공했니??';
    },

    // 실패시
    error => {},
  )
  .then(
    // 성공시
    result => {
      console.log(result);
      return result + '너 정말 성공했니222??';
    },

    // 실패시
    error => {},
  )
  .then(
    // 성공시
    result => {
      console.log(result);
    },

    // 실패시
    error => {},
  );
