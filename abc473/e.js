const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const B = [0];
for (let i = 0; i < N; i++) {
  B[i + 1] = (B[i] + A[i]) % K;
}

const seen = new Set();
const dp = [0];
for (let i = 0; i < B.length; i++) {
  dp[i + 1] = dp[i];
  if (seen.has(B[i])) {
    dp[i + 1]++;
    seen.clear();
  }
  seen.add(B[i]);
}
console.log(dp[dp.length - 1]);
