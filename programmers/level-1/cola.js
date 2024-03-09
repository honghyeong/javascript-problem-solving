/*
[Problem]
- 콜라 문제
- https://school.programmers.co.kr/learn/courses/30/lessons/132267

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution(2, 1, 20));
  console.log(solution(3, 1, 19));
  //   console.log(solution(2, 1, 20));
}
main();

function solution(a, b, n) {
  return Math.floor(Math.max(n - b, 0) / (a - b)) * b;
}
