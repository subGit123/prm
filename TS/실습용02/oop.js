// 📌타입스크립트의 oop
// 멤버변수 == 속성 == 프로퍼티
// 멈버함수 = 메소드
var Employee = /** @class */ (function () {
    // 생성자
    function Employee(empName, age, emJob) {
        var _this = this;
        this.printEmp = function () {
            console.log("".concat(_this.empName, "\uB2D8\uC740 ").concat(_this.age, "\uC138\uC774\uACE0 ").concat(_this.emJob, "\uC73C\uB85C \uC77C\uC744 \uD558\uACE0 \uC788\uC5B4\uC694"));
        };
        this.empName = empName;
        this.age = age;
        this.emJob = emJob;
    }
    return Employee;
}());
var employee = new Employee('kim', 20, '개발자');
employee.empName = 'lee';
employee.printEmp();
