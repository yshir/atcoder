const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split('').map(Number);
  B[i] = input[i + 1].split('').map(Number);
}

for (let j = 0; j < N - 1; j++) {
  B[0][j + 1] = A[0][j];
}
for (let j = 1; j < N; j++) {
  B[N - 1][j - 1] = A[N - 1][j];
}

for (let i = 1; i < N; i++) {
  B[i - 1][0] = A[i][0];
}
for (let i = 0; i < N - 1; i++) {
  B[i + 1][N - 1] = A[i][N - 1];
}

for (let i = 0; i < N; i++) {
  console.log(B[i].join(''));
}
