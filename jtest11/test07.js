// JSON 문자열을 JSON으로 변환하기 parse
const jsonStr = '{"drama":"PET","season":2017,"casting":'
    + '["koyuki", "matsumoto jun"], "character":["sumire", "momo"]}';

console.log(JSON.parse(jsonStr));
console.log(JSON.parse(jsonStr, (key, val) => {
    if (key === 'season') val = 2003;
    return val;
}));

console.log(JSON.parse('13.1'));
console.log(typeof JSON.parse('13.1'));
console.log(JSON.parse('false'));
console.log(typeof JSON.parse('false'));

/* 원시형 값: 문자형, 숫자형, 불린형(true/false), null
   원시형 값 중 JSON문자열이 아니어도 오류없이 parse메소드가 실행되는 경우.
   문자열 'false'는 불린형 false를 반환함.
*/
console.log(JSON.parse("Kiss Carnival"));
// 특정 원시 자료형을 나타내지 않는 문자형, 또는 배열 형태의 문자형은 실행 즉시 에러발생
console.log(JSON.parse('[2003,2017]'));