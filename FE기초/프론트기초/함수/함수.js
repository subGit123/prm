// 일급 객체

// 함수가 함수를 매개 변수를 가짐===========
function foo(arg) {
  arg();
}

function bar() {
  console.log('bar');
}

foo(bar); // bar

//함수는 함수의 반환값
function foo1(arg) {
  return arg;
}

function bar1() {
  console.log('bar1');
}

foo1(bar1)(); // bar1

// 함수는 할당명령어의 대상
const foo2 = function () {
  arg();
};

foo2(1); // 1

//=====================================

// 기본값 매개변수
function foo3(arg = 1) {
  console.log(arg);
}

foo3(); // 1

// 나머지 매개변수

function foo4(arg, ...rest) {
  console.log(rest);
}

foo4(1, 2, 3); // [2,3]

// 인자값 매개변수

function foo5(arg) {
  console.log(arguments);
}

foo5(1, 2, 3); // {... 프로토타입 객체}

//===================================

// 즉시 실행 함수
(function foo6() {
  console.log('foo');
})(); // foo

// 재귀 함수
function foo7(arg) {
  if (arg == 5) {
    return;
  }
  foo7(arg + 1);
}

foo7(1); // 1 2 3 4

//중첩 함수
function foo8(arg) {
  function bar2() {
    console.log(arg);
  }
  bar2();
}

foo8(1); // 1

//콜백함수
function foo9(arg) {
  arg();
}

foo9(() => {
  console.log(1);
}); // 1
