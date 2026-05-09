const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const dp = [[0, A[0]]];
for (let i = 1; i < N; i++) {
  dp[i] = [...dp[i - 1]];
  dp[i][0] = Math.max(dp[i][0], dp[i - 1][1] + A[i] * 2);
  dp[i][1] = Math.max(dp[i][1], dp[i - 1][0] + A[i] * 1);
}

console.log(Math.max(...dp[dp.length - 1]));
