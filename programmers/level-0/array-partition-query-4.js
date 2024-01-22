// https://school.programmers.co.kr/learn/courses/30/lessons/181922

function solution(arr, queries) {
  for (let i = 0; i < queries.length; i++) {
    const query = queries[i];
    for (let j = query[0]; j <= query[1]; j++) {
      if (j % query[2] == 0) {
        arr[j] += 1;
      }
    }
  }
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
);
