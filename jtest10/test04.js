// 객체 변경되지 않도록 하기 freeze
let obj = {};

obj.title = 'IDOL';
obj = Object.freeze(obj);
obj.title = 'Euphoria';

console.log(obj);

const changeUnitNum = (obj, num) => {
    'use strict';

    while (true) {
        // 반복문 내부가 true인 경우에만 순환
        console.log(obj);

        if (obj.age >= num) {
            obj = Object.freeze(obj);
        }
        obj.age += 1;
        // freeze 선언 후 obj를 수정하면, 에러발생
        // freeze 선언 전 까지만 객체 수정 가능
    }
}

let profile = { name: '지연', age: 25 };
changeUnitNum(profile, 30);