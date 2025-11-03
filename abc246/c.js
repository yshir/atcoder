const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, X] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = A.reduce((a, b) => a + b, 0);
let remain = K;
for (let i = 0; i < N; i++) {
  const used = Math.min(Math.floor(A[i] / X), remain);
  if (used > 0) {
    remain -= used;
    ans -= used * X;
    A[i] -= used * X;
  }
}

A.sort((a, b) => b - a);
for (let i = 0; i < N; i++) {
  if (A[i] === 0) break;
  if (remain === 0) break;
  remain--;
  ans -= A[i];
}

console.log(ans);
