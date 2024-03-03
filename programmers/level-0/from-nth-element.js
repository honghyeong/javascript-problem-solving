/*
[Problem]
- n 번째 원소부터
- https://school.programmers.co.kr/learn/courses/30/lessons/181892

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(num_list, n) {
  return num_list.slice(n - 1);
}
