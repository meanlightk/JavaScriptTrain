function vertifyNumber(n) {
    if(Number.isNaN(n) || !n) return 0;
    return n;
}
const num1 = vertifyNumber(15); // 15
const num2 = vertifyNumber(undefined); // 0
const num3 = vertifyNumber(null); // 0
const num4 = vertifyNumber(NaN); // 0
console.log(num1 + num2 + num3 + num4);