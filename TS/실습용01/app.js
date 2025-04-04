var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
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
// 열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "famale";
})(GenderType || (GenderType = {}));
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
}());
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
// setInfo(std);
// 함수의 매개변수도 선택적으로 만들 수 있음
function sum02(a, b) {
    return a;
}
// 📌객체 리터럴
var user = {
    name: 'john',
    age: 25,
};
// 📌any 타입
var anyVal = 100;
anyVal = 'ddd';
// 📌유니온 타입
var anyVal02 = 100;
anyVal = 'ddd';
var item;
// 문자와 숫자를 모두 받지만 리턴 값은 문자열
function con(val) {
    // item = anyVal02; // 큰 범위(str or num)이 작은 범위(num)으로 들어가 오류 발생
    // 타입 연산자 사용하기
    if (typeof val === 'string') {
        item = 0;
    }
    else {
        item = val;
    }
    return String(item);
}
// 문자와 숫자를 모두 받지만 리턴 값은 숫자형
function con02(val) {
    return Number(val);
}
console.log(con(anyVal02)); // '100'
console.log(con02(anyVal02)); // 100
// 📌배열 타입
var numv = [1, 2, 3, 4, 5];
var strv = ['apple', 'banana'];
numv.forEach(function (v) {
    console.log(v);
});
strv.map(function (v) {
    console.log(v);
});
// 📌배열의 유니온 타입
var mixedArray = [1, 'two', 3, 'four'];
mixedArray.forEach(function (v) {
    console.log(v);
});
// 읽기 전용
var readOnlyArray = [1, 3];
// 📌튜플 : 타입의 순서가 정해져 있음
var greeting = [1, 'hello', true];
// 📌spread 연산자
var firstArr = [1, 2, 3];
var secondArr = [4, 5, 6];
var combineArr = __spreadArray(__spreadArray([], firstArr, true), secondArr, true);
combineArr.forEach(function (i, v) {
    console.log("".concat(i, " : ").concat(v));
});
