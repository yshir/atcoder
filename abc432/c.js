const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X, Y] = input[0].split(' ').map(BigInt);
const A = input[1].split(' ').map(BigInt);

A.sort((a, b) => Number(a - b));

const target = Y * A[0];
const div = Y - X;
let ans = A[0];
for (let i = 1; i < N; i++) {
  const cur = Y * A[i];
  const diff = cur - target;
  if (diff % div !== 0n) {
    ans = -1;
    break;
  }
  const pass = diff / div;
  if (pass > A[i]) {
    ans = -1;
    break;
  }
  ans += A[i] - pass;
}
console.log(ans.toString());
