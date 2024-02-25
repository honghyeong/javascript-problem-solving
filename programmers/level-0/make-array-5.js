/*
[Problem]
- 배열 만들기 5
- https://school.programmers.co.kr/learn/courses/30/lessons/181912

[Core Algoirhm]
- array method

[Feedback]
-

 */
function main() {
  console.log(
    solution(["0123456789", "9876543210", "9999999999999"], 50000, 5, 5)
  );
}
main();

function solution(intStrs, k, s, l) {
  return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}
