const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ').map(Number);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= W; j++) {
    dp[i][j] = -1;
  }
}

dp[0][0] = 0;

for (let i = 0; i < N; i++) {
  const [w, v] = input[i + 1].split(' ').map(Number);

  for (let j = 0; j <= W; j++) {
    if (dp[i][j] !== -1) {
      dp[i + 1][j] = Math.max(dp[i][j], dp[i + 1][j]);
      if (j + w <= W) {
        dp[i + 1][j + w] = Math.max(dp[i][j], dp[i][j] + v);
      }
    }
  }
}

let ans = 0;
for (let i = 0; i <= W; i++) {
  ans = Math.max(ans, dp[N][i]);
}
console.log(ans);
