const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];
const C = input[2].split(' ').map(BigInt);

const INF = BigInt(1e9) * BigInt(N) + 1n;
const min = (a, b) => (a > b ? b : a);

const dp = [];
for (let i = 0; i < N; i++) {
  dp[i] = [];

  if (i === 0) {
    dp[i][0] = 0n;
    dp[i][1] = 0n;
    dp[i][2] = INF;
    dp[i][3] = INF;
  } else {
    dp[i][0] = dp[i - 1][1];
    dp[i][1] = dp[i - 1][0];
    dp[i][2] = min(dp[i - 1][0], dp[i - 1][3]);
    dp[i][3] = min(dp[i - 1][1], dp[i - 1][2]);
  }

  if (S[i] === '0') {
    dp[i][1] += C[i];
    dp[i][3] += C[i];
  } else {
    dp[i][0] += C[i];
    dp[i][2] += C[i];
  }
}

console.log(min(dp[N - 1][2], dp[N - 1][3]).toString());
