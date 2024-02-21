/*
[Problem]
- 카운트업
- https://school.programmers.co.kr/learn/courses/30/lessons/181920

[Core Algoirhm]
- 반복문

[Feedback]
-

 */
function main() {
  console.log(solution(3, 10));
}
main();

function solution(start_num, end_num) {
  var answer = [];
  for (let i = start_num; i <= end_num; i++) {
    answer.push(i);
  }
  return answer;
}
