/*
[Problem]
- 내적
- https://school.programmers.co.kr/learn/courses/30/lessons/70128

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(a, b) {
  return a.reduce((cur, value, index) => cur + value * b[index], 0);
}
