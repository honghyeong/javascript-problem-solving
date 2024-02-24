/*
[Problem]
- 간단한 논리 연산
- https://school.programmers.co.kr/learn/courses/30/lessons/181917

[Core Algoirhm]
- logical operations

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(x1, x2, x3, x4) {
  return (x1 || x2) && (x3 || x4);
}
