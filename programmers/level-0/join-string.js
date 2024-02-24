/*
[Problem]
- 글자 이어 붙여 문자열 만들기
- https://school.programmers.co.kr/learn/courses/30/lessons/181915

[Core Algoirhm]
- 표준 내장 객체 Array 메소드 사용

[Feedback]
- 표준 내장 객체 Array 메소드 사용

 */
function main() {
  console.log(solution());
}
main();

function solution(my_string, index_list) {
  return index_list.map((i) => my_string[i]).join("");
}
