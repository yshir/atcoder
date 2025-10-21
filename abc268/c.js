const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const P = input[1].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = 0;
}

for (let i = 0; i < N; i++) {
  A[(N + P[i] - i - 1) % N]++;
  A[(N + P[i] - i) % N]++;
  A[(N + P[i] - i + 1) % N]++;
}

console.log(Math.max(...A));
