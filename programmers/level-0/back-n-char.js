/*
[Problem]
- 문자열의 뒤의 n글자
- https://school.programmers.co.kr/learn/courses/30/lessons/181910

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(my_string, n) {
  return my_string.slice(my_string.length - n, my_string.length);
}
