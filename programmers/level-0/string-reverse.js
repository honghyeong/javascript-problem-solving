/*
[Problem]
- 문자열 뒤집기
- https://school.programmers.co.kr/learn/courses/30/lessons/181905

[Core Algoirhm]
- Array Method(slice, splice, from, reverse)

[Feedback]
- Method

 */
function main() {
  console.log(solution());
}

function solution(my_string, s, e) {
  const stringArr = Array.from(my_string);
  const changeStr = stringArr.slice(s, e + 1);
  stringArr.splice(s, changeStr.length, ...changeStr.reverse());
  return stringArr.join("");
}

main();
