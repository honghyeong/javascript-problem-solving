/*
[Problem]
- qr code
- https://school.programmers.co.kr/learn/courses/30/lessons/181903

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(q, r, code) {
  return [...code].filter((_, i) => i % q == r).join("");
}
