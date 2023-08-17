let a;
let b;

console.log(a);
console.log(b);
//  결과 : undefined
//  변수를 선언 했지만 값이 없을 때 undefined가 자동으로 나온다.

let name = null;
let bye = null;
// 결과 : null
// null은 존재하지 않는 값, 비어 있는 값, 알 수 없는 값이다.

let age = 1;

console.log(age/0);
// 결과 : Infinity
// Infinity로 값이 무한대로 나오는 결과다.