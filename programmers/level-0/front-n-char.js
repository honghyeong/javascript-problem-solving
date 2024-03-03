/*
[Problem]
- 문자열의 앞의 n글자
- https://school.programmers.co.kr/learn/courses/30/lessons/181907

[Core Algoirhm]
- string method

[Feedback]
-

 */
function main() {
  console.log(solution());
}

function solution(my_string, n) {
  return my_string.slice(0, n);
}
main();
