let error = new Error('대장 에러 객체');
let syntaxError = new SyntaxError('구문 에러 발생');
let referenceError = new ReferenceError('대입 에러 발생');

console.log(error.name); // Error
console.log(error.message); // 대장 에러 객체
