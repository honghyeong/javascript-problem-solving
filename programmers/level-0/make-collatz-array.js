/*
[Problem]
- 콜라츠 수열 만들기
- https://school.programmers.co.kr/learn/courses/30/lessons/181919

[Core Algoirhm]
- while문, 삼항 연산자

[Feedback]
-

 */
function main() {
  console.log(solution(10));
}
main();

function solution(n) {
  var answer = [];
  while (n != 1) {
    answer.push(n);
    n = n % 2 == 0 ? n / 2 : 3 * n + 1;
  }
  answer.push(1);
  return answer;
}
