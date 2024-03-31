/*
[Problem]
- 3진법 뒤집기
- https://school.programmers.co.kr/learn/courses/30/lessons/68935

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution(45));
}
main();

function solution(n) {
  return parseInt(Array.from(n.toString(3)).reverse().join(""), 3);
}
