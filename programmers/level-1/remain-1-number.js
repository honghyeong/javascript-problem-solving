/*
[Problem]
- 나머지가 1이 되는 수 찾기
- https://school.programmers.co.kr/learn/courses/30/lessons/87389

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution(10));
}
main();

function solution(n) {
  for (let i = 2; i <= Math.sqrt(n - 1); i++) {
    if ((n - 1) % i == 0) {
      return n;
    }
  }
  return n - 1;
}
