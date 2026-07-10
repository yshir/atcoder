const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const L = [];
const R = [];

for (let i = 0; i < N; i++) {
  L[i] = Math.min((L[i - 1] || 0) + 1, A[i]);
  R[N - 1 - i] = Math.min((R[N - i] || 0) + 1, A[N - 1 - i]);
}

let ans = 0;
for (let i = 0; i < N; i++) {
  ans = Math.max(ans, Math.min(L[i], R[i]));
}
console.log(ans);
