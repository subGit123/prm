//map method

const arr = [1, 2, 3, 4, 5];

const forEachArr = arr.forEach(v => {
  return v * 2; //undefined
});

const mapArr = arr.map(v => {
  return v * 2; //[ 2, 4, 6, 8, 10 ]
});

//forEach는 반환값을 변환하지 못하지만
//map은 반환값을 변환할 수 있음
