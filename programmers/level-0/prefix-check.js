/*
[Problem]
- 접두사인지 확인하기
- https://school.programmers.co.kr/learn/courses/30/lessons/181906

[Core Algoirhm]
- string method

[Feedback]
-

 */
function main() {
  console.log(solution());
}

function solution(my_string, is_prefix) {
  return my_string.startsWith(is_prefix) ? 1 : 0;
}

main();
