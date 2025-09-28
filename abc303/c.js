const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, H, K] = input[0].split(' ').map(Number);
const S = input[1].split('');

const k = (x, y) => `${x}_${y}`;

const set = new Set();
for (let i = 0; i < M; i++) {
  const [x, y] = input[i + 2].split(' ').map(Number);
  set.add(k(x, y));
}

let x = 0;
let y = 0;
let h = H;
const d = {
  U: [0, 1],
  D: [0, -1],
  R: [1, 0],
  L: [-1, 0],
};
for (let i = 0; i < S.length; i++) {
  h--;
  const [dx, dy] = d[S[i]];
  x += dx;
  y += dy;
  if (h < 0) {
    console.log('No');
    return;
  }
  if (set.has(k(x, y)) && h < K) {
    set.delete(k(x, y));
    h = K;
  }
}

console.log('Yes');
