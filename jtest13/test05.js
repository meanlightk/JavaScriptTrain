// Set 객체 순환하기 for-of, forEach
const s = new Set();

s.add('one');
s.add('two');

console.log('키 정보만 출력합니다.');
for (let value of s.keys()) {
    console.log(value);
}

console.log('[for..of, entries] 키, 값 정보를 동시에 출력합니다.');
for (let [key, value] of s.entries()) {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
}
console.log('[forEach] 키, 값 정보를 동시에 출력합니다.');
s.forEach((value, key) => {
    console.log(`키는 ${key}, 값은 ${value} 입니다`);
})