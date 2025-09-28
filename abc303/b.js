const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < M; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

const seen = new Set();
for (let i = 0; i < M; i++) {
  for (let j = 0; j < N - 1; j++) {
    seen.add(A[i][j] + ',' + A[i][j + 1]);
    seen.add(A[i][j + 1] + ',' + A[i][j]);
  }
}

console.log((N * (N - 1) - seen.size) / 2);
