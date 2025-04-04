function logName(name: string) {
  console.log(name);
}

logName('kimㅇㅇㅇ');

// ==========타입 추론=====================

let student = {
  name: 'john',
  course: 'typescript',
  score: 100,
  grade: () => {
    console.log('A');
  },
};

// 인터페이스 사용

interface Student {
  name: string;
  course: string;
  score: number;
  grade: () => void;
}

let student02: Student = {
  name: 'john',
  course: 'typescript',
  score: 100,
  grade: () => {
    console.log('A');
  },
};

// ==========타입 지정=====================

let stdId: number = 1111;
let stdName: string = 'any';
let age: number = 20;
let gender: string = 'male';

// 열거형 : 사용자 정의 타입
enum GenderType {
  Male = 'male',
  Female = 'famale',
}

// 함수의 데이터 타입 명시 (매개변수 , 리턴타입)

function sum(a: number, b: number): number {
  return a + b;
}

interface StuInfo {
  stdId: number;
  stdName?: string;
  age?: number;
  // gender?: GenderType;
  // 문자열 리터럴
  gender?: 'male' | 'female';
  completed?: boolean;

  setName?: (name: string) => void;
  getName?: () => string;
}

// 인터페이스 상속받기
class MyStudent implements StuInfo {
  stdId = 45645646;
  stdName = 'park';
  age = 25;
  gender: 'male' | 'female' = 'male';
  completed = false;

  setName(name: string): void {
    this.stdName = name;
    console.log('이름 설정 : ' + this.stdName);
  }
}

const myInstance = new MyStudent();
myInstance.setName('hioo');

function getInfo(id: number): StuInfo {
  return {
    stdId: id,
    stdName: 'lee',
    // age: 20,
    gender: 'female',
    completed: true,
  };
}
console.log(getInfo(111));

let std = {
  stdId: 45645646,
  stdName: 'park',
  age: 25,
  gender: 'male',
  completed: false,
};

function setInfo(student: StuInfo): void {
  console.log(student);
}

// setInfo(std);

// 함수의 매개변수도 선택적으로 만들 수 있음

function sum02(a: number, b?: number): number {
  return a;
}

// 📌객체 리터럴

const user: {name: string; age: number} = {
  name: 'john',
  age: 25,
};

// 📌any 타입

let anyVal: any = 100;
anyVal = 'ddd';

// 📌타입 별칭
type strOrNum = number | string;

// 📌유니온 타입

let anyVal02: number | string = 100;
anyVal = 'ddd';

let item: number;

// 문자와 숫자를 모두 받지만 리턴 값은 문자열
function con(val: strOrNum): string {
  // item = anyVal02; // 큰 범위(str or num)이 작은 범위(num)으로 들어가 오류 발생

  // 타입 연산자 사용하기
  if (typeof val === 'string') {
    item = 0;
  } else {
    item = val;
  }

  return String(item);
}

// 문자와 숫자를 모두 받지만 리턴 값은 숫자형
function con02(val: strOrNum): number {
  return Number(val);
}

console.log(con(anyVal02)); // '100'
console.log(con02(anyVal02)); // 100

// 📌배열 타입
const numv: number[] = [1, 2, 3, 4, 5];

const strv: string[] = ['apple', 'banana'];

numv.forEach(v => {
  console.log(v);
});

strv.map(v => {
  console.log(v);
});

// 📌배열의 유니온 타입
const mixedArray: (string | number)[] = [1, 'two', 3, 'four'];

mixedArray.forEach(v => {
  console.log(v);
});

// 읽기 전용

const readOnlyArray: ReadonlyArray<number> = [1, 3];

// 📌튜플 : 타입의 순서가 정해져 있음
const greeting: [number, string, boolean] = [1, 'hello', true];

// 📌spread 연산자

const firstArr: number[] = [1, 2, 3];
const secondArr: number[] = [4, 5, 6];

const combineArr: number[] = [...firstArr, ...secondArr];

combineArr.forEach((v, i) => {
  console.log(`${i} : ${v}`);
});
