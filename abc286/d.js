const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, X] = input[0].split(' ').map(Number);

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = new Uint8Array(X + 1);
}
dp[0][0] = 1;

for (let i = 0; i < N; i++) {
  const [a, b] = input[i + 1].split(' ').map(Number);
  for (let j = 0; j <= X; j++) {
    if (!dp[i][j]) continue;
    for (let k = 0; k <= b; k++) {
      const nj = j + a * k;
      if (nj <= X) dp[i + 1][nj] = 1;
    }
  }
}
console.log(dp[N][X] ? 'Yes' : 'No');
