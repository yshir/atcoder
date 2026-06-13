const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[0].split(' ').map(Number);
const S = input[1];

const M = 998244353;

const dp = [];
for (let i = 0; i <= N; i++) dp[i] = {};
dp[0] = { '': 1 };

const isPalindrome = (s) => {
  return s === [...s].reverse().join('');
};

for (let i = 0; i < N; i++) {
  for (const t in dp[i]) {
    for (const u of S[i] === '?' ? ['A', 'B'] : S[i]) {
      const newT = t + u;
      if (newT.length < K || !isPalindrome(newT)) {
        const dpT = newT.length < K ? newT : newT.slice(1);
        dp[i + 1][dpT] = (dp[i + 1][dpT] || 0) + dp[i][t];
        dp[i + 1][dpT] %= M;
      }
    }
  }
}

let ans = 0;
for (const k in dp[N]) {
  ans += dp[N][k];
  ans %= M;
}
console.log(ans);
