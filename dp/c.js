const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const dp = [
  [0], //
  [0], //
  [0], //
];

for (let i = 0; i < N; i++) {
  const [a, b, c] = input[i + 1].split(' ').map(Number);

  dp[0][i + 1] = Math.max(dp[1][i], dp[2][i]) + a;
  dp[1][i + 1] = Math.max(dp[0][i], dp[2][i]) + b;
  dp[2][i + 1] = Math.max(dp[0][i], dp[1][i]) + c;
}

console.log(
  Math.max(
    dp[0][N], //
    dp[1][N], //
    dp[2][N] //
  )
);
