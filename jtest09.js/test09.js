// 배열 인덱스로 특정 요소 수정하기 splice
const fruits = ['melon', 'lemon', 'source', 'apple', 'juice'];

fruits.splice(4, 1); // 과일이 아닌 juice 문자열 추출
fruits.splice(4, 0, 'grape');
/* 삭제할 개수를 지정하지 않아 추출되는 요소없지만, 
   세번째 인자로 인해 시작 인덱스에 'grape' 문자열 추가
*/
fruits.splice(2, 1, 'mandarin', 'strawberry', 'watermelon');
console.log(fruits);