/*
[Problem]
- 콜라츠 추측
- https://school.programmers.co.kr/learn/courses/30/lessons/12943

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(num) {
  var answer = 0;
  while (num != 1) {
    if (answer >= 500) return -1;
    answer++;
    num = num % 2 == 1 ? num * 3 + 1 : num / 2;
  }
  return answer;
}
