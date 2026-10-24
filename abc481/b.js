const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

let ans = 0;

if (A[0] === K) ans++;

for (let i = 0; i < N - 1; i++) {
  if (A[i] === K) continue;
  if (A[i] < K && A[i + 1] >= K) ans++;
  if (A[i] > K && A[i + 1] <= K) ans++;
}

console.log(ans);
