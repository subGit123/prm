function logName(name) {
  console.log(name);
}
logName('kimㅇㅇㅇ');
// ==========타입 추론=====================
var student = {
  name: 'john',
  course: 'typescript',
  score: 100,
  grade: function () {
    console.log('A');
  },
};
var student02 = {
  name: 'john',
  course: 'typescript',
  score: 100,
  grade: function () {
    console.log('A');
  },
};
// ==========타입 지정=====================
var stdId = 1111;
var stdName = 'any';
var age = 20;
var gender = 'male';
// 함수의 데이터 타입 명시 (매개변수 , 리턴타입)
function sum(a, b) {
  return a + b;
}
// 인터페이스 상속받기
var MyStudent = /** @class */ (function () {
  function MyStudent() {
    this.stdId = 45645646;
    this.stdName = 'park';
    this.age = 25;
    this.gender = 'male';
    this.completed = false;
  }
  MyStudent.prototype.setName = function (name) {
    this.stdName = name;
    console.log('이름 설정 : ' + this.stdName);
  };
  return MyStudent;
})();
var myInstance = new MyStudent();
myInstance.setName('hioo');
function getInfo(id) {
  return {
    stdId: id,
    stdName: 'lee',
    // age: 20,
    gender: 'female',
    completed: true,
  };
}
console.log(getInfo(111));
var std = {
  stdId: 45645646,
  stdName: 'park',
  age: 25,
  gender: 'male',
  completed: false,
};
function setInfo(student) {
  console.log(student);
}
setInfo(std);
// 함수의 매개변수도 선택적으로 만들 수 있음
function sum02(a, b) {
  return a;
}
