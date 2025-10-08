const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, W] = input[0].split(' ').map(Number);

const V = 10 ** 3 * N;

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= V; j++) {
    dp[i][j] = W + 1;
  }
}

dp[0][0] = 0;

for (let i = 0; i < N; i++) {
  const [w, v] = input[i + 1].split(' ').map(Number);

  for (let j = 0; j <= V; j++) {
    dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
    dp[i + 1][j + v] = Math.min(dp[i + 1][j + v], dp[i][j] + w);
  }
}

let ans = 0;
for (let i = 0; i <= V; i++) {
  if (dp[N][i] <= W) ans = i;
}
console.log(ans);
