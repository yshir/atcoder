const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}

let zsum = 0;
for (let i = 0; i < N; i++) {
  zsum += A[i][2];
}
const zmaj = Math.ceil(zsum / 2);

const INF = Number.MAX_SAFE_INTEGER;

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= zmaj; j++) {
    dp[i][j] = INF;
  }
}
dp[0][0] = 0;

for (let i = 0; i < N; i++) {
  const [x, y, z] = A[i];

  const xysum = x + y;
  const xymaj = Math.ceil(xysum / 2);
  const xrem = Math.max(xymaj - x, 0);

  for (let j = 0; j <= zmaj; j++) {
    const nj = Math.min(zmaj, j + z);
    dp[i + 1][nj] = Math.min(dp[i + 1][nj], dp[i][j] + xrem);
    dp[i + 1][j] = Math.min(dp[i + 1][j], dp[i][j]);
  }
}

console.log(dp[N][zmaj]);
