/*
[Problem]
- 성격 유형 검사하기
- https://school.programmers.co.kr/learn/courses/30/lessons/118666

[Core Algoirhm]
- Math library
- String 비구조화 할당


[Feedback]
-

 */
function main() {
  console.log(solution(["AN", "CF", "MJ", "RT", "NA"], [5, 3, 2, 7, 5]));
}
main();

function solution(survey, choices) {
  const MBTI = {};
  const types = ["RT", "CF", "JM", "AN"];

  types.forEach((type) => {
    type.split("").forEach((char) => (MBTI[char] = 0));
  });

  choices.forEach((choice, index) => {
    const [disagree, agree] = survey[index];
    // console.log(disagree, agree);

    MBTI[choice > 4 ? agree : disagree] += Math.abs(choice - 4);
  });

  return types.map(([a, b]) => (MBTI[b] > MBTI[a] ? b : a)).join("");
}
