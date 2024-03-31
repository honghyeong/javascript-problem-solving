/*
[Problem]
- [카카오 인턴] 키패드 누르기
- https://school.programmers.co.kr/learn/courses/30/lessons/67256?language=javascript

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  //   console.log(solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5], "right"));
  console.log(solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2], "left"));
}
main();

function solution(numbers, hand) {
  let answer = "";
  const keyMap = {};
  for (let i = 1; i <= 9; i++) {
    keyMap[i.toString()] = [(i - 1) % 3, 3 - Math.floor((i - 1) / 3)];
  }
  keyMap["*"] = [0, 0];
  keyMap["0"] = [1, 0];
  keyMap["#"] = [2, 0];

  let leftThumb = keyMap["*"];
  let rightThumb = keyMap["#"];

  numbers.forEach((number) => {
    number = number.toString();
    if (number == "1" || number == "4" || number == "7") {
      answer += "L";
      leftThumb = keyMap[number];
    } else if (number == "3" || number == "6" || number == "9") {
      answer += "R";
      rightThumb = keyMap[number];
    } else {
      dst = keyMap[number];
      let leftDistance =
        Math.abs(leftThumb[0] - dst[0]) + Math.abs(leftThumb[1] - dst[1]);
      let rightDistance =
        Math.abs(rightThumb[0] - dst[0]) + Math.abs(rightThumb[1] - dst[1]);
      if (
        (leftDistance == rightDistance && hand == "left") ||
        leftDistance < rightDistance
      ) {
        answer += "L";
        leftThumb = dst;
      } else if (
        (leftDistance == rightDistance && hand == "right") ||
        rightDistance < leftDistance
      ) {
        answer += "R";
        rightThumb = dst;
      }
    }
  });
  return answer;
}
