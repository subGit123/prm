### 프로토타입과 생성자 함수

객체 지향 프로그래밍

- `객체`라는 기본 단위로 이들의 `상호작옹`으로 서술하는 방식
- 데이터를 객체로 묶어 관련 기능을 함께 관리하는 프로그래밍 패러다임
- 상태 , 속성 , 메서드
- JS는 프로토타입 기반 객체지향!!

프로토타입 객체

- 부모 객체 개념
- 부모객체의 속성과 메서드를 상속받아 사용 가능
- `__proto__` 접근자로 접근 가능

프로토타입 객체 생성

- 생성자 함수 사용

  - 인스턴스 객체 생성 시 사용
  - new 키워드로 호출
  - 대문자로 네이밍

- 인스턴스 : 객체를 실체화 한 것(실제 사용하는 것)

- constructor : 자기 자신을 생성한 객체 참조

프로토타입 chain

- 객체의 속성 참조시 , 속성이 없는 경우 동작

```js
function Person(name) {
  this.name = name;
}

Person.prototype.age = 30;

const person1 = new Person('Alice');
console.log(person1.age); // 30 Person.prototype.age <- 이것을 상속받음
```

---

## class 문법

class의 형태

- 클래스내에서는 메서드만 작성 가능!!

class 문법

- constructor

  - 인스턴스가 생성될 때 호출되는 메서드

- 인스턴스 속성
  - this에 바인딩 필요
  - 인스턴스가 생성될 때마다 독립적으로 실행

```js
class stack {
  constuctor() {
    this.stack = []; // 인스턴스 속성
  }
}
```

상속 extends

- 부모 클래스를 상속받아 자식 클래스를 정의할 때 사용

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
}

class Dog extends Animal {
  constructor(name) {
    super(name); // 부모 클래스 호출
  }
  sleep() {
    return this.name + 'zzz';
  }
}

const dog = new Dog('pepe'); // 부모 클래스에 pepe 할당
dog.name;
dog.sleep(); // pepe zzz
```
