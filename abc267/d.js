const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const INF = 10n ** 18n;

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= M; j++) {
    dp[i][j] = -INF;
  }
}
dp[0][0] = 0n;

const max = (a, b) => (a < b ? b : a);

for (let i = 0; i < N; i++) {
  const ni = i + 1;
  for (let j = 0; j <= M; j++) {
    // non-choose
    {
      const nj = j;
      dp[ni][nj] = max(dp[ni][nj], dp[i][j]);
    }

    // choose
    {
      const nj = j + 1;
      if (nj <= M) dp[ni][nj] = max(dp[ni][nj], dp[i][j] + BigInt(nj) * BigInt(A[i]));
    }
  }
}

console.log(dp[N][M].toString());
