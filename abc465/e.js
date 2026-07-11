const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const N = input[0];

const MOD = 998244353;

const dp = [];
for (let i = 0; i <= N.length; i++) {
  dp[i] = [];
  for (let smaller = 0; smaller < 2; smaller++) {
    dp[i][smaller] = [];
    for (let started = 0; started < 2; started++) {
      dp[i][smaller][started] = [];
      for (let summod = 0; summod < 3; summod++) {
        dp[i][smaller][started][summod] = [];
        for (let bits = 0; bits < 1 << 10; bits++) {
          dp[i][smaller][started][summod][bits] = 0;
        }
      }
    }
  }
}
dp[0][0][0][0][0] = 1;

for (let i = 0; i < N.length; i++) {
  for (let smaller = 0; smaller < 2; smaller++) {
    const dmax = smaller ? 9 : Number(N[i]);
    for (let d = 0; d <= dmax; d++) {
      for (let started = 0; started < 2; started++) {
        for (let summod = 0; summod < 3; summod++) {
          for (let bits = 0; bits < 1 << 10; bits++) {
            const ni = i + 1;
            const nsmaller = smaller || d < Number(N[i]) ? 1 : 0;
            const nstarted = started || d > 0 ? 1 : 0;
            const nsummod = (summod + d) % 3;
            const nbits = nstarted ? bits | (1 << d) : bits;

            dp[ni][nsmaller][nstarted][nsummod][nbits] += dp[i][smaller][started][summod][bits];
            dp[ni][nsmaller][nstarted][nsummod][nbits] %= MOD;
          }
        }
      }
    }
  }
}

const popcount = (a) => {
  let c = 0;
  while (a > 0) {
    if (a % 2) c++;
    a = Math.floor(a / 2);
  }
  return c;
};

let ans = 0;
for (let smaller = 0; smaller < 2; smaller++) {
  for (let summod = 0; summod < 3; summod++) {
    for (let bits = 0; bits < 1 << 10; bits++) {
      let cnt = 0;
      if (summod === 0) cnt++;
      if ((bits >> 3) & 1) cnt++;
      if (popcount(bits) === 3) cnt++;

      if (cnt === 1) {
        ans += dp[N.length][smaller][1][summod][bits];
        ans %= MOD;
      }
    }
  }
}
console.log(ans);
