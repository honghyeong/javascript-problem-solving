/*
[Problem]
- 하샤드 수
- https://school.programmers.co.kr/learn/courses/30/lessons/12947

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(x) {
  var sum = 0;
  var value = x;
  while (x > 0) {
    sum += x % 10;
    x = Math.floor(x / 10);
  }
  return !(value % sum);
}
