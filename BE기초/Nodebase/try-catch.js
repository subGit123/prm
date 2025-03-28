let str = `{
    "num1" : 2
`;

try {
  //   username;
  let json = JSON.parse(str);
  console.log(json);
} catch (e) {
  console.log(e.name); // SyntaxError
  console.log(e.message); // xpected ',' or '}' after property value in JSON at position 17
}
