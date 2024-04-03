/*
[Problem]
- 소수 만들기
- https://school.programmers.co.kr/learn/courses/30/lessons/181921?language=javascript

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(solution());
}
main();

function isPrimeNumber(num) {
  for (let i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

function solution(nums) {
  var answer = 0;

  for (let a = 0; a < nums.length; a++) {
    for (let b = a + 1; b < nums.length; b++) {
      for (let c = b + 1; c < nums.length; c++) {
        if (isPrimeNumber(nums[a] + nums[b] + nums[c])) {
          answer++;
        }
      }
    }
  }

  return answer;
}
