const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const T = input[1].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = { i, t: T[i] };
}
A.sort((a, b) => a.t - b.t);
console.log([A[0].i + 1, A[1].i + 1, A[2].i + 1].join(' '));
