const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ');
const C = [];
for (let i = 0; i < N; i++) {
  C[i] = input[i + 1].split(' ').map(Number);
}
C.sort((a, b) => b[0] - a[0]);

let sum = 0;
let ans = 0n;
for (let i = 0; i < N; i++) {
  const now = Math.min(C[i][1], W - sum);
  sum += now;
  ans += BigInt(C[i][0]) * BigInt(now);
  if (sum === W) break;
}

console.log(ans.toString());
