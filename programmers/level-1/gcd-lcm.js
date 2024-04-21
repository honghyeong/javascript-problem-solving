/*
[Problem]
- 최대공약수와 최소공배수
- https://school.programmers.co.kr/learn/courses/30/lessons/12940

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
  var r;
  for (var ab = a * b; (r = a % b); a = b, b = r) {}
  return [b, ab / b];
}
