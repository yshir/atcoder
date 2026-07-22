const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K, D] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const INF = 1e9 * 100 + 10;

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j < D; j++) {
    dp[i][j] = [];
    for (let k = 0; k <= K; k++) {
      dp[i][j][k] = -INF;
    }
  }
}
dp[0][0][0] = 0;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < D; j++) {
    for (let k = 0; k <= K; k++) {
      // choose
      {
        const ni = i + 1;
        const nj = (j + A[i]) % D;
        const nk = k + 1;
        const nv = dp[i][j][k] + A[i];
        if (nk <= K) dp[ni][nj][nk] = Math.max(dp[ni][nj][nk], nv);
      }

      // ignore
      {
        const ni = i + 1;
        const nj = j;
        const nk = k;
        const nv = dp[i][j][k];
        dp[ni][nj][nk] = Math.max(dp[ni][nj][nk], nv);
      }
    }
  }
}

const ans = dp[N][0][K];
console.log(ans < 0 ? -1 : ans);
