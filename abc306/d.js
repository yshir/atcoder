const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const INF = BigInt(1e9) * BigInt(1e6);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j < 2; j++) {
    dp[i][j] = -INF;
  }
}
dp[0][0] = 0n;

const max = (a, b) => (a > b ? a : b);

for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(BigInt);

  for (let j = 0; j < 2; j++) {
    dp[i + 1][j] = max(dp[i + 1][j], dp[i][j]);
  }
  if (x === 0n) {
    dp[i + 1][0] = max(dp[i + 1][0], dp[i][0] + y);
    dp[i + 1][0] = max(dp[i + 1][0], dp[i][1] + y);
  } else {
    dp[i + 1][1] = max(dp[i + 1][1], dp[i][0] + y);
  }
}

console.log(max(dp[N][0], dp[N][1]).toString());
