const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
let [R, C] = input[1].split(' ').map(Number);
R--;
C--;

let cnt = 0;
for (const [dx, dy] of [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
]) {
  const nx = dx + R;
  const ny = dy + C;
  if (nx < 0 || ny < 0 || nx >= H || ny >= W) continue;
  cnt++;
}
console.log(cnt);
