/*
[Problem]
- 부족한 금액 계산하기
- https://school.programmers.co.kr/learn/courses/30/lessons/82612

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(price, money, count) {
  let answer = money - (((count + 1) * count) / 2) * price;
  return answer > 0 ? 0 : -answer;
}
