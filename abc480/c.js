const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K, T] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

A.push(-K);
A.push(T);
A.sort((x, y) => x - y);

let ans = 0;
for (let i = 1; i < A.length; i++) {
  const l = A[i - 1] + K;
  const r = A[i];
  if (r > T) break;
  if (l > r) continue;
  ans += Math.ceil((r - l) / K);
}
console.log(ans);
