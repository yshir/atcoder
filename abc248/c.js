const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(Number);

const alpha = 998244353;

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= K; j++) {
    dp[i][j] = 0;
  }
}
dp[0][0] = 1;

for (let i = 0; i < N; i++) {
  for (let j = 0; j < K; j++) {
    for (let k = 1; k <= M; k++) {
      const ni = i + 1;
      const nj = j + k;
      if (ni >= dp.length || nj >= dp[0].length) continue;
      dp[ni][nj] = (dp[ni][nj] + dp[i][j]) % alpha;
    }
  }
}

let ans = 0;
for (let i = 0; i <= K; i++) {
  ans = (ans + dp[dp.length - 1][i]) % alpha;
}
console.log(ans);
