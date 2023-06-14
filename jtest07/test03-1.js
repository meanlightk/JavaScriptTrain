function vertifyInteger(n) {
    if (!Number.isInteger(n)) return 0;
    return n;
}
const num1 = vertifyInteger(15);
const num2 = vertifyInteger(Infinity);
const num3 = vertifyInteger(0.05);
console.log(num1, num2, num3);