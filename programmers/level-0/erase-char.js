/*
[Problem]
- 글자 지우기
- https://school.programmers.co.kr/learn/courses/30/lessons/181900

[Core Algoirhm]
- 

[Feedback]
- includes

 */
function main() {
  console.log(solution());
}
main();

function solution(my_string, indices) {
  return Array.from(my_string)
    .filter((_, i) => !indices.includes(i))
    .join("");
}
