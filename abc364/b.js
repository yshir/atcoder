const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const [S_i, S_j] = input[1].split(' ').map(Number);
const C = [];
for (let i = 0; i < H; i++) {
  C[i] = input[i + 2].split('');
}
const X = input[H + 2];

let x = S_i - 1;
let y = S_j - 1;
for (let i = 0; i < X.length; i++) {
  const d = {
    U: [-1, 0],
    D: [1, 0],
    L: [0, -1],
    R: [0, 1],
  };

  const [dx, dy] = d[X[i]];
  const nx = x + dx;
  const ny = y + dy;
  if (nx >= 0 && nx < H && ny >= 0 && ny < W && C[nx][ny] === '.') {
    x = nx;
    y = ny;
  }
}
console.log(x + 1 + ' ' + (y + 1));
