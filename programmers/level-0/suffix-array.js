/*
[Problem]
- 접미사 배열
- https://school.programmers.co.kr/learn/courses/30/lessons/181909

[Core Algoirhm]
- sort : https://hianna.tistory.com/409
- substring

[Feedback]
-

 */
function main() {
  console.log(solution("banana"));
}
main();

function solution(my_string) {
  return Array.from(my_string)
    .map((_, i) => my_string.substring(i))
    .sort();
}
