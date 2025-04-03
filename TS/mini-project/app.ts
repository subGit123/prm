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
  gender?: GenderType;
  completed?: boolean;

  setName?: (name: string) => void;
  getName?: () => string;
}

// 인터페이스 상속받기
class MyStudent implements StuInfo {
  stdId = 45645646;
  stdName = 'park';
  age = 25;
  gender = GenderType.Male;
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
    gender: GenderType.Female,
    completed: true,
  };
}
console.log(getInfo(111));

let std = {
  stdId: 45645646,
  stdName: 'park',
  age: 25,
  gender: GenderType.Male,
  completed: false,
};

function setInfo(student: StuInfo): void {
  console.log(student);
}

setInfo(std);

// 함수의 매개변수도 선택적으로 만들 수 있음

function sum02(a: number, b?: number): number {
  return a;
}
