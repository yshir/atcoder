const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

let ans = 0;
let x = 0;
let y = 0;
for (let i = 0; i < N; i++) {
  const [x2, y2] = input[i + 1].split(' ').map(Number);
  const dx = x2 - x;
  const dy = y2 - y;
  ans += Math.sqrt(dx ** 2 + dy ** 2);
  x = x2;
  y = y2;
}

const [x2, y2] = [0, 0];
const dx = x2 - x;
const dy = y2 - y;
ans += Math.sqrt(dx ** 2 + dy ** 2);

console.log(ans);
