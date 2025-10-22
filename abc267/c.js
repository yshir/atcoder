const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const C = [];
C[0] = 0;
for (let i = 0; i < M - 1; i++) {
  C[0] += A[i];
}
for (let i = 1; i < N - M + 2; i++) {
  C[i] = C[i - 1] - A[i - 1] + A[i + M - 2];
}

const D = [];
D[0] = 0;
for (let i = 0; i < M; i++) {
  D[0] += (i + 1) * A[i];
}
for (let i = 1; i < N - M + 1; i++) {
  D[i] = D[i - 1] - A[i - 1] - C[i] + A[i + M - 1] * M;
}

console.log(Math.max(...D));
