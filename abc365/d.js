const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const INF = 1e7;

const dp = [];
for (let i = 0; i < N + 1; i++) {
  dp[i] = { R: 0, P: 0, S: 0 };
}

for (let i = 0; i < N; i++) {
  if (S[i] === 'R') {
    dp[i + 1].R = Math.max(dp[i].P, dp[i].S);
    dp[i + 1].P = Math.max(dp[i].R, dp[i].S) + 1;
    dp[i + 1].S = -INF;
  }
  if (S[i] === 'P') {
    dp[i + 1].R = -INF;
    dp[i + 1].P = Math.max(dp[i].R, dp[i].S);
    dp[i + 1].S = Math.max(dp[i].R, dp[i].P) + 1;
  }
  if (S[i] === 'S') {
    dp[i + 1].R = Math.max(dp[i].P, dp[i].S) + 1;
    dp[i + 1].P = -INF;
    dp[i + 1].S = Math.max(dp[i].P, dp[i].R);
  }
}

console.log(Math.max(dp[N].R, dp[N].P, dp[N].S));
