const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

for (let i = 0; i < N - 1; i++) {
  const [s, t] = input[i + 2].split(' ').map(Number);
  const cur = Math.floor(A[i] / s);
  A[i + 1] += t * cur;
}
console.log(A[N - 1]);
