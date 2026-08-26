const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}
const P = input[H + 1].split(' ').map(Number);

const B = [];
for (let i = 0; i < H; i++) {
  B[i] = [];
  for (let j = 0; j < W; j++) {
    B[i][j] = Infinity;
  }
}
B[H - 1][W - 1] = Math.max(P[H + W - 2] - A[H - 1][W - 1], 0);

for (let i = H - 1; i >= 0; i--) {
  for (let j = W - 1; j >= 0; j--) {
    if (i > 0) B[i - 1][j] = Math.min(B[i - 1][j], Math.max(B[i][j] + P[i + j - 1] - A[i - 1][j], 0));
    if (j > 0) B[i][j - 1] = Math.min(B[i][j - 1], Math.max(B[i][j] + P[i + j - 1] - A[i][j - 1], 0));
  }
}
console.log(B[0][0]);
