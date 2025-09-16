const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W, N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < H; i++) {
  A[i] = [];
  for (let j = 0; j < W; j++) {
    A[i][j] = '.';
  }
}

let x = 0;
let y = 0;
let r = 0;

const d = [
  [-1, 0], // up
  [0, 1], // right
  [1, 0], // down
  [0, -1], // left
];

for (let i = 0; i < N; i++) {
  if (A[x][y] === '.') {
    A[x][y] = '#';
    r = (r + 1) % 4;
  } else {
    A[x][y] = '.';
    r = (r + 3) % 4;
  }
  const [dx, dy] = d[r];
  x = (x + dx + H) % H;
  y = (y + dy + W) % W;
}

for (let i = 0; i < H; i++) {
  console.log(A[i].join(''));
}
