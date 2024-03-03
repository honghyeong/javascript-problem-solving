/*
[Problem]
- 문자 개수 세기
- https://school.programmers.co.kr/learn/courses/30/lessons/181902

[Core Algoirhm]
- ASCII Code
- 

[Feedback]
- Array constructor, Array Method(fill)

 */
function main() {
  console.log(solution("Programmers"));
}
main();

function solution(my_string) {
  let answer = Array(52).fill(0);

  Array.from(my_string).forEach((el) => {
    let asciiValue = el.charCodeAt(0);
    if (asciiValue >= 65 && asciiValue <= 90) {
      answer[asciiValue - 65]++;
    } else if (asciiValue >= 97 && asciiValue <= 122) {
      answer[asciiValue - 97 + 26]++;
    }
  });

  return answer;
}
