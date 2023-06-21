/* 정규표현식: / 와 / 를 사이에 두는 표현식을 통해 일치하는 문자열을 찾거나 반환 또는 일괄 치환
정규표현식으로 대응되는 문자열 위치 확인하기 search */
const str = 'To lost your path is the way to find that path';

const regex1 = /path/;
const regex2 = /q/;
const regex3 = /t/g;
const regex4 = /t/ig;

console.log(str.search(regex1));
console.log(str.search(regex2));
console.log(str.search(regex3));
console.log(str.search(regex4));