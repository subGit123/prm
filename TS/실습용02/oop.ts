// 📌타입스크립트의 oop

// 멤버변수 == 속성 == 프로퍼티
// 멈버함수 = 메소드

class Employee {
  // 생성자
  constructor(
    // 선언 및 초기화를 동시에 함
    private _empName: string,
    private _age: number,
    private _emJob: string,
  ) {}

  // get /set
  get empName() {
    return this._empName;
  }

  set empName(val: string) {
    this._empName = val;
  }

  printEmp = (): void => {
    console.log(
      `${this._empName}님은 ${this._age}세이고 ${this._emJob}으로 일을 하고 있어요`,
    );
  };
}

var employee = new Employee('kim', 20, '개발자');
// employee.empName = 'lee'; private에 의해 접근 불가

// get 함수를 이용해 접근할 수 있음
// 원본 객체를 보호하고 안전하게 관리
employee.empName = 'lee'; // 원본 객체가 아닌 get을 호출하여 사용 가능
employee.printEmp();
