const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, R, C] = input[0].split(' ').map(Number);
const S = input[1];

let x = 0;
let y = 0;

const A = new Set();
const k = (x, y) => `${x}_${y}`;
const set = (x, y) => A.add(k(x, y));
const get = (x, y) => A.has(k(x, y));
set(0, 0);

const d = {
  N: [1, 0],
  W: [0, 1],
  S: [-1, 0],
  E: [0, -1],
};

const ans = [];
for (let i = 0; i < N; i++) {
  const [dx, dy] = d[S[i]];
  x += dx;
  y += dy;
  set(x, y);
  ans.push(get(R + x, C + y) ? '1' : '0');
}
console.log(ans.join(''));
