const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, Q] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  const [, ...a] = input[i + 1].split(' ').map(Number);
  A[i] = a;
}

for (let i = 0; i < Q; i++) {
  const [s, t] = input[i + 1 + N].split(' ').map(Number);
  console.log(A[s - 1][t - 1]);
}
