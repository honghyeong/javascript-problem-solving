/*
[Problem]
- 접미사인지 확인하기
- https://school.programmers.co.kr/learn/courses/30/lessons/181908

[Core Algoirhm]
- String method(endsWith)

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}
