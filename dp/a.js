const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

const dp = [0, Math.abs(H[1] - H[0])];
for (let i = 2; i < N; i++) {
  dp[i] = Math.min(
    dp[i - 2] + Math.abs(H[i] - H[i - 2]), //
    dp[i - 1] + Math.abs(H[i] - H[i - 1])
  );
}
console.log(dp[N - 1]);
