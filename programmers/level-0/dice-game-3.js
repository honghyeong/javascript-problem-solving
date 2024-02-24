/*
[Problem]
- 주사위 게임 3
- https://school.programmers.co.kr/learn/courses/30/lessons/181916

[Core Algoirhm]
- map(counter)
-

[Feedback]
- map 비구조화 할당
- map.size
- sort 이용 조금 더 

 */
function main() {
  console.log(solution(4, 1, 4, 4));
}
main();

function solution(a, b, c, d) {
  const counter = new Map();
  for (const data of [a, b, c, d]) {
    counter.set(data, (counter.get(data) || 0) + 1);
  }

  const sortedCounter = [...counter].sort((a, b) => {
    if (a[1] === b[1]) return b[0] - a[0];
    else return b[1] - a[1];
  });

  if (counter.size === 1) return 1111 * sortedCounter[0][0];
  else if (counter.size === 2)
    return sortedCounter[0][1] == 3
      ? (10 * sortedCounter[0][0] + sortedCounter[1][0]) ** 2
      : (sortedCounter[0][0] + sortedCounter[1][0]) *
          (sortedCounter[0][0] - sortedCounter[1][0]);
  else if (counter.size === 3) return sortedCounter[1][0] * sortedCounter[2][0];
  else if (counter.size === 4) return sortedCounter[3][0];
}
