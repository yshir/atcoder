const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(BigInt);
const A = input[1].split(' ').map(BigInt);

for (let i = 0; i < N - 1n; i++) {
  A[i + 1] += A[i];
}

const sum = A[N - 1n];

for (let i = 0; i < N; i++) {
  const tt = T % sum;
  if (tt <= A[i]) {
    console.log(`${i + 1} ${tt - (A[i - 1] || 0n)}`);
    return;
  }
}
