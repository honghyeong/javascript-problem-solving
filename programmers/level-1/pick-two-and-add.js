/*
[Problem]
- 두 개 뽑아서 더하기
- https://school.programmers.co.kr/learn/courses/30/lessons/68644

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution([2, 1, 3, 4, 1]));
}
main();

function solution(numbers) {
  const set = new Set();
  numbers.sort((a, b) => a - b);
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      set.add(numbers[i] + numbers[j]);
    }
  }
  return Array.from(set).sort((a, b) => a - b);
}
