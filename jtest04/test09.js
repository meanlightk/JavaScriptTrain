let a = 10;
console.log(a);

// 함수 스코프에 정의된 변수 b는 해당 함수 내에서만 접근 가능 -> 함수 밖에서 접근 불가
function print() {
    let b = 20;
    if (true) {
        var c = 30;
    }
    console.log(c);
}

print();
console.log(b);