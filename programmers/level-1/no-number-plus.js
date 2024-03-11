/*
[Problem]
- 없는 숫자 더하기
- https://school.programmers.co.kr/learn/courses/30/lessons/86051

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(numbers) {
  return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .filter((el) => !numbers.includes(el))
    .reduce((acc, el) => acc + el);
}
