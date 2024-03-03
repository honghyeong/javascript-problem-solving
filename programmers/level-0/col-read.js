/*
[Problem]
- 세로 읽기
- https://school.programmers.co.kr/learn/courses/30/lessons/181904

[Core Algoirhm]
- String Deconstruction
- Array Method(filter)

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(my_string, m, c) {
  return [...my_string].filter((_, i) => i % m == c - 1).join("");
}
