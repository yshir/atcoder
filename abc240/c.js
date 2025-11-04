const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= X; j++) {
    dp[i][j] = false;
  }
}
dp[0][0] = true;

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  for (let j = 0; j <= X; j++) {
    if (j - a >= 0 && dp[i][j - a]) {
      dp[i + 1][j] = dp[i][j - a];
    }
    if (j - b >= 0 && dp[i][j - b]) {
      dp[i + 1][j] = dp[i][j - b];
    }
  }
}

console.log(dp[N][X] ? 'Yes' : 'No');
