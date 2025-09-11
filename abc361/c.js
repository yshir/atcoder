const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.sort((a, b) => a - b);

let ans = Number.MAX_SAFE_INTEGER;
for (let i = 0; i < K + 1; i++) {
  ans = Math.min(ans, A[i + (N - K - 1)] - A[i]);
}
console.log(ans);
