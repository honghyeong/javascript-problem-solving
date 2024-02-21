/*
[Problem]
- 배열 만들기 4
- https://school.programmers.co.kr/learn/courses/30/lessons/181918

[Core Algoirhm]
- while, else-if

[Feedback]
-

 */
function main() {
  console.log(solution([1, 4, 2, 5, 3]));
}
main();

function solution(arr) {
  var stk = [];
  var i = 0;

  while (i < arr.length) {
    if (stk.length == 0) {
      stk.push(arr[i]);
      i++;
    } else {
      if (stk[stk.length - 1] < arr[i]) {
        stk.push(arr[i]);
        i++;
      } else {
        stk.pop();
      }
    }
  }
  return stk;
}
