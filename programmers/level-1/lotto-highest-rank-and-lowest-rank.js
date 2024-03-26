/*
[Problem]
- 로또의 최고 순위와 최저 순위
- https://school.programmers.co.kr/learn/courses/30/lessons/77484

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution([44, 1, 0, 0, 31, 25], [31, 10, 45, 1, 6, 19]));
}
main();

function solution(lottos, win_nums) {
  const rank = { 6: 1, 5: 2, 4: 3, 3: 4, 2: 5 };
  let correct = 0;
  let zeroNums = 0;
  lottos.sort((a, b) => b - a);
  win_nums.sort((a, b) => b - a);
  lottos.forEach((lotto) => {
    if (win_nums.indexOf(lotto) != -1) correct++;
    else if (lotto == 0) zeroNums++;
  });

  var answer = [rank[correct + zeroNums] || 6, rank[correct] || 6];
  return answer;
}
