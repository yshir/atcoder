const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [H, W] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < H; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

const row = [];
for (let i = 0; i < H; i++) {
  let sum = 0;
  for (let j = 0; j < W; j++) {
    sum += A[i][j];
  }
  row[i] = sum;
}

const col = [];
for (let j = 0; j < W; j++) {
  let sum = 0;
  for (let i = 0; i < H; i++) {
    sum += A[i][j];
  }
  col[j] = sum;
}

const B = [];
for (let i = 0; i < H; i++) {
  B[i] = [];
  for (let j = 0; j < W; j++) {
    B[i][j] = row[i] + col[j] - A[i][j];
  }
}

for (let i = 0; i < H; i++) {
  console.log(B[i].join(' '));
}
