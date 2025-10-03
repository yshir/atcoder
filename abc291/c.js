const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const map = {
  R: [1, 0],
  L: [-1, 0],
  U: [0, 1],
  D: [0, -1],
};

let x = 0;
let y = 0;

const k = (x, y) => x + '_' + y;
const seen = new Set([k(x, y)]);
for (let i = 0; i < N; i++) {
  const [dx, dy] = map[S[i]];
  x += dx;
  y += dy;
  if (seen.has(k(x, y))) {
    console.log('Yes');
    return;
  }
  seen.add(k(x, y));
}
console.log('No');
