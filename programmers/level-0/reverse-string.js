/*
[Problem]
- 문자열 여러 번 뒤집기
- https://school.programmers.co.kr/learn/courses/30/lessons/181913

[Core Algoirhm]
- 

[Feedback]
- splice, slice 활용법 숙지

 */
function main() {
  console.log(
    solution("rermgorpsam", [
      [2, 3],
      [0, 7],
      [5, 9],
      [6, 10],
    ])
  );
}
main();

function solution(my_string, queries) {
  var answer = Array.from(my_string);
  queries.forEach(([start, end]) => {
    const changeStr = answer.slice(start, end + 1);
    answer.splice(start, changeStr.length, ...changeStr.reverse());
  });
  return answer.join("");
}
