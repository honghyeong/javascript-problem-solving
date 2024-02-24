/*
[Problem]
- 9로 나눈 나머지
- https://school.programmers.co.kr/learn/courses/30/lessons/181914

[Core Algoirhm]
- Array.from()
- Array.reduce()

[Feedback]
-

 */
function main() {
  console.log(solution("78720646226947352489"));
}
main();

function solution(number) {
  return Array.from(number).reduce((acc, el) => acc + parseInt(el), 0) % 9;
}
