/*
[Problem]
- 크레인 인형 뽑기 게임
- https://school.programmers.co.kr/learn/courses/30/lessons/64061

[Core Algoirhm]
- 

[Feedback]
-

 */
function main() {
  console.log(
    solution(
      [
        [0, 0, 0, 0, 0],
        [0, 0, 1, 0, 3],
        [0, 2, 5, 0, 1],
        [4, 2, 4, 4, 2],
        [3, 5, 1, 3, 1],
      ],
      [1, 5, 3, 5, 1, 2, 1, 4]
    )
  );
}
main();

function solution(board, moves) {
  const map = {};
  for (let i = 1; i <= board.length; i++) {
    map[i] = [];
  }

  for (let i = 0; i < board.length; i++) {
    board[i].forEach((value, idx) => {
      if (value != 0) {
        map[idx + 1].unshift(value);
      }
    });
  }

  const basket = [];
  let answer = 0;

  moves.forEach((move) => {
    let doll = 0;
    if (map[move].length == 0) return;

    doll = map[move].pop();
    if (basket.length > 0 && basket[basket.length - 1] == doll) {
      basket.pop();
      answer += 2;
    } else {
      basket.push(doll);
    }
  });

  return answer;
}
