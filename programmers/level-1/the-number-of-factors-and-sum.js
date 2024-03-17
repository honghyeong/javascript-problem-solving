/*
[Problem]
- 약수의 개수와 덧셈
- https://school.programmers.co.kr/learn/courses/30/lessons/77884

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(left, right) {
  let answer = 0;
  for (let i = left; i <= right; i++) {
    answer += Number.isInteger(Math.sqrt(i)) ? -i : +i;
  }
  return answer;
}
