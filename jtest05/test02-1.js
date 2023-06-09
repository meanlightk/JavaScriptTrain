const CONST_USER = {name: 'jay', age: 30};
console.log(CONST_USER.name, CONST_USER.age);
CONST_USER.name = 'jay2';
CONST_USER.age = '31';
console.log(CONST_USER.name, CONST_USER.age);
// Uncaught TypeError : const로 정의되면, 객체 내부의 상태만 변경 가능
CONST_USER = {name: 'bbo'}