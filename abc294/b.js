const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) A[i] = input[i + 1].split(' ').map(Number);

const B = [];
for (let i = 0; i < H; i++) {
  B[i] = [];
  for (let j = 0; j < W; j++) {
    if (A[i][j] === 0) {
      B[i][j] = '.';
    } else {
      B[i][j] = String.fromCharCode('A'.charCodeAt(0) + (A[i][j] - 1));
    }
  }
  console.log(B[i].join(''));
}
