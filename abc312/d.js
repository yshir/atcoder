const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const dp = [];
for (let i = 0; i <= S.length; i++) {
  dp[i] = [];
  for (let j = 0; j <= S.length; j++) {
    dp[i][j] = 0;
  }
}
dp[0][0] = 1;

const M = 998244353;

for (let i = 0; i < S.length; i++) {
  for (let j = 0; j <= S.length; j++) {
    if (S[i] === '?' || S[i] === '(') {
      if (j < S.length) {
        dp[i + 1][j + 1] += dp[i][j];
        dp[i + 1][j + 1] %= M;
      }
    }
    if (S[i] === '?' || S[i] === ')') {
      if (j > 0) {
        dp[i + 1][j - 1] += dp[i][j];
        dp[i + 1][j - 1] %= M;
      }
    }
  }
}

console.log(dp[S.length][0]);
