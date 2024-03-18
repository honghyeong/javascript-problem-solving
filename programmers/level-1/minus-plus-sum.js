/*
[Problem]
- 음양 더하기
- https://school.programmers.co.kr/learn/courses/30/lessons/76501

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(absolutes, signs) {
  return absolutes.reduce(
    (cur, value, index) => cur + value * (signs[index] ? +1 : -1),
    0
  );
}
