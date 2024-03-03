/*
[Problem]
- 길이에 따른 연산
- https://school.programmers.co.kr/learn/courses/30/lessons/181879

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function solution(num_list) {
  return num_list.length >= 11
    ? num_list.reduce((acc, el) => acc + el, 0)
    : num_list.reduce((acc, el) => acc * el, 1);
}
