/*
[Problem]
- [PCCP 기출문제] 1번 / 붕대 감기]
- https://school.programmers.co.kr/learn/courses/30/lessons/250137

[Core Algoirhm]
- Array Method

[Feedback]
-

 */
function main() {
  console.log(
    solution([5, 1, 5], 50, [
      [2, 40],
      [14, 15],
      [15, 5],
      [16, 5],
    ])
  );
}

function solution([t, x, y], health, attacks) {
  var curHealth = health;
  let lastDamagedTime = 0;
  for (let [time, damage] of attacks) {
    let noAttackTime = time - 1 - lastDamagedTime;
    curHealth += x * noAttackTime + y * Math.floor(noAttackTime / t);
    curHealth = curHealth > health ? health : curHealth;

    curHealth -= damage;
    if (curHealth <= 0) {
      return -1;
    }
    lastDamagedTime = time;
  }

  return curHealth;
}

main();
