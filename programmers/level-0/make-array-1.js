/*
[Problem]
- 배열 만들기 1
- https://school.programmers.co.kr/learn/courses/30/lessons/181901

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(n, k) {
  var answer = [];
  for (let i = k; i <= n; i += k) {
    answer.push(i);
  }
  return answer;
}
