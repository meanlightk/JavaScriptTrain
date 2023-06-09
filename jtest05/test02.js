// Uncaught TypeError : const는 변하지 않는 값을 정의
const URL = "http://js.com";
URL = "http://js.com";

if(true) {
    const URL2 = "http://js.com";
}

console.log(URL2);