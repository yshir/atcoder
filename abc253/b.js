const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < H; i++) {
  S[i] = input[i + 1];
}

const A = [];
for (let i = 0; i < H; i++) {
  for (let j = 0; j < W; j++) {
    if (S[i][j] === 'o') {
      A.push([i, j]);
    }
  }
}

console.log(Math.abs(A[0][0] - A[1][0]) + Math.abs(A[0][1] - A[1][1]));
