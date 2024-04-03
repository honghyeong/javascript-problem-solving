/*
[Problem]
- 직사각형 별찍기
- https://school.programmers.co.kr/learn/courses/30/lessons/12969

[Core Algoirhm]
- 

[Feedback]
-
*/

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data) => {
  const n = data.split(" ");
  const a = Number(n[0]),
    b = Number(n[1]);

  for (let i = 0; i < b; i++) {
    let row = "*".repeat(a);
    console.log(row);
  }
});
