/*
[Problem]
- 평균 구하기
- https://school.programmers.co.kr/learn/courses/30/lessons/12944

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(arr) {
  return (
    arr.reduce((cur, value) => {
      return cur + value;
    }) / arr.length
  );
}
