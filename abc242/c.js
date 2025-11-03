const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const alpha = 998244353;

const dp = [];
for (let i = 0; i < N; i++) {
  dp[i] = [];
  for (let j = 0; j < 9; j++) {
    if (i === 0) {
      dp[i][j] = 1;
    } else {
      dp[i][j] = 0;
    }
  }
}

for (let i = 1; i < N; i++) {
  for (let j = 0; j < 9; j++) {
    if (j - 1 >= 0) {
      dp[i][j - 1] += dp[i - 1][j];
      dp[i][j - 1] %= alpha;
    }

    dp[i][j] += dp[i - 1][j];
    dp[i][j] %= alpha;

    if (j + 1 < 9) {
      dp[i][j + 1] += dp[i - 1][j];
      dp[i][j + 1] %= alpha;
    }
  }
}

let cnt = 0;
for (let i = 0; i < 9; i++) {
  cnt += dp[N - 1][i];
  cnt %= alpha;
}
console.log(cnt);
