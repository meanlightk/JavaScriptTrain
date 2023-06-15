// 문자열 길이 구하기 length
const arr = ['short', 'long sentence, it is not apporopriate'];

arr.forEach(str => {
    if (str.length < 10) console.log(str);
});