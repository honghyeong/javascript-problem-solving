/*
[Problem]
- 핸드폰 번호 가리기
- https://school.programmers.co.kr/learn/courses/30/lessons/12948

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution("01033334444"));
}
main();

function solution(phone_number) {
  var answer = "*".repeat(phone_number.length - 4) + phone_number.slice(-4);
  return answer;
}
