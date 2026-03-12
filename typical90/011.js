const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const MAX_D = 5000;

const A = [];
for (let i = 0; i < N; i++) {
  const [d, c, s] = input[i + 1].split(' ').map(Number);
  A[i] = { d, c, s };
}

A.sort((a, b) => a.d - b.d);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let j = 0; j <= MAX_D; j++) {
    dp[i][j] = 0;
  }
}

for (let i = 0; i < N; i++) {
  for (let j = 0; j <= MAX_D; j++) {
    const { d, c, s } = A[i];
    dp[i + 1][j] = Math.max(dp[i + 1][j], dp[i][j]);
    if (j + c <= d && j + c <= MAX_D) {
      dp[i + 1][j + c] = Math.max(dp[i + 1][j + c], dp[i][j] + s);
    }
  }
}

let ans = 0;
for (let j = 0; j < dp[0].length; j++) {
  ans = Math.max(ans, dp[dp.length - 1][j]);
}
console.log(ans);
