/*
[Problem]
- 부분 문자열 이어 붙여 문자열 만들기
- https://school.programmers.co.kr/learn/courses/30/lessons/181911

[Core Algoirhm]
- array method

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(my_strings, parts) {
  return my_strings
    .map((v, i) => v.slice(parts[i][0], parts[i][1] + 1))
    .join("");
}
