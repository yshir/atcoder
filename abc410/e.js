const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, H, M] = input[0].split(' ').map(Number);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= H; j++) {
    dp[i][j] = -1;
  }
}
dp[0][H] = M;

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  for (let j = 0; j <= H; j++) {
    dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j] - b);
    if (j - a >= 0) dp[i + 1][j - a] = Math.max(dp[i + 1][j - a], dp[i][j]);
  }

  let ok = false;
  for (let j = 0; j <= H; j++) {
    if (dp[i + 1][j] >= 0) ok = true;
  }
  if (!ok) {
    console.log(i);
    return;
  }
}

console.log(N);
