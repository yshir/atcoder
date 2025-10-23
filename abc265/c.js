const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const G = [];
for (let i = 0; i < H; i++) G[i] = input[i + 1];

let x = 0;
let y = 0;

const seen = new Set();
const k = (x, y) => `${x}_${y}`;

const d = {
  U: [-1, 0],
  D: [1, 0],
  L: [0, -1],
  R: [0, 1],
};

while (true) {
  if (seen.has(k(x, y))) {
    console.log(-1);
    return;
  }
  seen.add(k(x, y));
  const [dx, dy] = d[G[x][y]];
  x += dx;
  y += dy;

  if (x < 0 || y < 0 || x >= H || y >= W) {
    console.log([x - dx + 1, y - dy + 1].join(' '));
    return;
  }
}
