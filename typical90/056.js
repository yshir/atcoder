const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, S] = input[0].split(' ').map(Number);
const X = [];
for (let i = 0; i < N; i++) {
  X[i] = input[i + 1].split(' ').map(Number);
}

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= 1e5; j++) {
    dp[i][j] = undefined;
  }
}
dp[0][0] = '';

for (let i = 0; i < N; i++) {
  const [a, b] = X[i];
  for (let j = 0; j <= 1e5; j++) {
    if (dp[i][j] === undefined) continue;

    const ni = i + 1;
    {
      const nj = j + a;
      if (nj <= 1e5) dp[ni][nj] = dp[i][j] + 'A';
    }
    {
      const nj = j + b;
      if (nj <= 1e5) dp[ni][nj] = dp[i][j] + 'B';
    }
  }
}
console.log(dp[N][S] === undefined ? 'Impossible' : dp[N][S]);
