/*
[Problem]
- 예산
- https://school.programmers.co.kr/learn/courses/30/lessons/12982

[Core Algoirhm]
- Greedy Algorithm

[Feedback]
- Count up using compare operation

 */
function main() {
  console.log(solution());
}
main();

// function solution(d, budget) {
//   let answer = 0;
//   d.sort((a, b) => a - b);
//   for (let b of d) {
//     if (budget - b >= 0) {
//       answer++;
//       budget -= b;
//     } else {
//       return answer;
//     }
//   }
//   return answer;
// }

function solution(d, budget) {
  return d
    .sort((a, b) => a - b)
    .reduce((count, el) => {
      return count + ((budget -= el) >= 0);
    }, 0);
}
