/*
[Problem]
- 배열 만들기 2
- https://school.programmers.co.kr/learn/courses/30/lessons/181921?language=javascript

[Core Algoirhm]
- Iteratable Built-in Object(String)
- Map

[Feedback]
-

 */
function main() {
  console.log(solution("5525", "1255"));
}
main();

function solution(X, Y) {
  const map = new Map();
  const answer = [];
  for (let char of X) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of Y) {
    if (map.get(char) > 0) {
      map.set(char, map.get(char) - 1);
      answer.push(char);
    }
  }
  answer.sort((a, b) => b - a);
  return answer.length == 0 ? "-1" : answer[0] == 0 ? "0" : answer.join("");
}
