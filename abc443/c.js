const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, T] = input[0].split(' ').map(Number);
const A = (input[1] || '').split(' ').map(Number);

let ans = 0;
let prev = 0;
for (let i = 0; i < N; i++) {
  if (A[i] >= prev) {
    ans += Math.max(A[i] - prev, 0);
    prev = Math.max(A[i] + 100, prev);
  }
}
ans += Math.max(T - prev, 0);
console.log(ans);
