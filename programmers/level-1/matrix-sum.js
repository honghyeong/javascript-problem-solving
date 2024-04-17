/*
[Problem]
- 행렬의 덧셈
- https://school.programmers.co.kr/learn/courses/30/lessons/12950

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(
    solution(
      [
        [1, 2],
        [2, 3],
      ],
      [
        [3, 4],
        [5, 6],
      ]
    )
  );
}
main();

function solution(arr1, arr2) {
  return arr1.map((value, idx1) =>
    value.map((v, idx2) => {
      return v + arr2[idx1][idx2];
    })
  );
}
