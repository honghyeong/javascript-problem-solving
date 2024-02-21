/*
[Problem]
- 배열 만들기 2
- https://school.programmers.co.kr/learn/courses/30/lessons/181921?language=javascript

[Core Algoirhm]
- dfs

[Feedback]
- l보다 작을때 바로 return 해버리면 진행이 안되는 예외케이스를 생각못함

 */

function main() {
  console.log(solution(5, 555));
}
main();

function solution(l, r) {
  var answer = [];

  dfs(answer, "5", l, r);
  answer.sort((a, b) => a - b);

  if (answer.length == 0) answer.push(-1);

  return answer;
}

function dfs(answer, str, l, r) {
  var num = parseInt(str);
  if (num > r) return;

  if (num >= l && num <= r) {
    answer.push(num);
  }
  dfs(answer, str + "5", l, r);
  dfs(answer, str + "0", l, r);
}
