const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const T = input[0];
const [N] = input[1].split(' ').map(Number);

const INF = 1e9;

const dp = [{}];
for (let i = 0; i <= T.length; i++) {
  dp[0][T.slice(0, i)] = INF;
}
dp[0][''] = 0;

for (let i = 0; i < N; i++) {
  const [, ...S] = input[i + 2].split(' ');

  dp[i + 1] = {};
  for (const [str1, val] of Object.entries(dp[i])) {
    dp[i + 1][str1] = dp[i][str1];
  }

  for (const [str1, val] of Object.entries(dp[i])) {
    for (const str2 of S) {
      const new_str = str1 + str2;
      const new_val = val + 1;
      if (dp[i + 1][new_str] !== undefined) {
        dp[i + 1][new_str] = Math.min(dp[i + 1][new_str], new_val);
      }
    }
  }
}

const ans = dp[N][T];
console.log(ans >= INF ? -1 : ans);
