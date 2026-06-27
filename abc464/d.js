let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

const max = (a, b) => (a > b ? a : b);

while (T--) {
  const [N] = input[line++].split(' ').map(Number);
  const S = input[line++];
  const X = input[line++].split(' ').map(BigInt);
  const Y = input[line++].split(' ').map(BigInt);

  const INF = BigInt(Number.MAX_SAFE_INTEGER) * BigInt(N);

  const dp = [];
  for (let i = 0; i < N; i++) {
    if (i === 0) {
      dp[i] = {
        S: S[i] === 'S' ? 0n : -X[i],
        R: S[i] === 'R' ? 0n : -X[i],
      };
    } else {
      dp[i] = {
        S: max(dp[i - 1].S, dp[i - 1].R + Y[i - 1]),
        R: max(dp[i - 1].S, dp[i - 1].R),
      };
      if (S[i] === 'S') {
        dp[i].R -= X[i];
      } else {
        dp[i].S -= X[i];
      }
    }
  }

  console.log(max(dp[N - 1].S, dp[N - 1].R).toString());
}
