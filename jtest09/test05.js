// 배열에 특정 구분자 넣어 문자형으로 변환하기 join
const dialog = [
    'Fear is the path to the dark side',
    'Fear leads to anger',
    'Anger leads to hate',
    'Hate leads to suffering',
    'I sense much fear in you.'
];

// join은 각 배열 요소를 병합하여 하나의 문자열로 변환
console.log(dialog.join('. '));
console.log(dialog.join('.\n'));