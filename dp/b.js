const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const H = input[1].split(' ').map(Number);

const dp = [0];
for (let i = 0; i < N; i++) {
  for (let j = 1; j <= K; j++) {
    if (H[i + j] !== undefined) {
      if (dp[i + j] === undefined) {
        dp[i + j] = Number.MAX_SAFE_INTEGER;
      }
      dp[i + j] = Math.min(dp[i + j], dp[i] + Math.abs(H[i + j] - H[i]));
    }
  }
}
console.log(dp[N - 1]);
