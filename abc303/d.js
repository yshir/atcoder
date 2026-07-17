const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [X, Y, Z] = input[0].split(' ').map(BigInt);
const S = input[1];

const INF = BigInt(1e9) * BigInt(1e6);

const dp = [];
for (let i = 0; i <= S.length; i++) {
  dp[i] = [];
  for (let j = 0; j < 2; j++) {
    dp[i][j] = INF;
  }
}

dp[0][0] = 0n;

const min = (a, b) => (a > b ? b : a);

for (let i = 0; i < S.length; i++) {
  // caps
  dp[i][0] = min(dp[i][0], dp[i][1] + Z);
  dp[i][1] = min(dp[i][1], dp[i][0] + Z);

  if (S[i] === 'a') {
    dp[i + 1][0] = min(dp[i + 1][0], dp[i][0] + X); // off
    dp[i + 1][1] = min(dp[i + 1][1], dp[i][1] + Y); // on + shift
  }
  if (S[i] === 'A') {
    dp[i + 1][1] = min(dp[i + 1][1], dp[i][1] + X); // on
    dp[i + 1][0] = min(dp[i + 1][0], dp[i][0] + Y); // off + shift
  }
}

console.log(min(dp[S.length][0], dp[S.length][1]).toString());
