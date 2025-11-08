const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

const B = [];
for (let i = 0; i < W; i++) {
  B[i] = [];
  for (let j = 0; j < H; j++) {
    B[i][j] = A[j][i];
  }
}
for (let i = 0; i < W; i++) {
  console.log(B[i].join(' '));
}
