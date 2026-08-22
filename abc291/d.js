const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const MOD = 998244353;

const X = [];
for (let i = 0; i < N; i++) {
  X[i] = input[i + 1].split(' ').map(Number);
}

const dp = [];
for (let i = 0; i < N; i++) {
  dp[i] = [];
  for (let j = 0; j < 2; j++) {
    dp[i][j] = 0;
  }
}
dp[0][0] = 1;
dp[0][1] = 1;

for (let i = 0; i < N - 1; i++) {
  for (let j = 0; j < 2; j++) {
    const ni = i + 1;
    let [a1, b1] = X[i];
    let [a2, b2] = X[i + 1];
    const v = j ? b1 : a1;
    for (let nj = 0; nj < 2; nj++) {
      const nv = nj ? b2 : a2;
      if (v !== nv) {
        dp[ni][nj] += dp[i][j];
        dp[ni][nj] %= MOD;
      }
    }
  }
}
console.log(dp[N - 1].reduce((x, y) => (x + y) % MOD, 0));
