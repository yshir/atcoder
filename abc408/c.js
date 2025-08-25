const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);

const A = Array(N + 1).fill(0);
for (let i = 0; i < M; i++) {
  const [L, R] = input[i + 1].split(' ').map(Number);
  A[L - 1]++;
  A[R - 1 + 1]--;
}

for (let i = 0; i < N - 1; i++) {
  A[i + 1] = A[i] + A[i + 1];
}

let min = A[0];
for (let i = 0; i < N; i++) {
  min = Math.min(min, A[i]);
}
console.log(min);
