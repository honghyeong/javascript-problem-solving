/*
[Problem]
- 카운트 다운
- https://school.programmers.co.kr/learn/courses/30/lessons/181899

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}

main();
function solution(start, end_num) {
  var answer = [];
  for (let i = start; i >= end_num; i--) {
    answer.push(i);
  }
  return answer;
}
