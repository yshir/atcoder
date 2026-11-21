const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = input[1];

const dp = [];
for (let i = 0; i <= N; i++) {
  dp[i] = [];
  for (let cut = 0; cut < 3; cut++) {
    dp[i][cut] = [];
    for (let abc = 0; abc < 8; abc++) {
      dp[i][cut][abc] = 0n;
    }
  }
}

dp[0][0][0] = 1n;
for (let i = 0; i < N; i++) {
  const ni = i + 1;
  for (let abc = 0; abc < 8; abc++) {
    const a = ((abc >> 0) & 1) === 1 ? 1 : 0;
    const b = ((abc >> 1) & 1) === 1 ? 1 : 0;
    const c = ((abc >> 2) & 1) === 1 ? 1 : 0;

    for (let cut = 0; cut < 3; cut++) {
      const na = a > 0 || S[i] === 'A' ? 1 : 0;
      const nb = b > 0 || S[i] === 'B' ? 1 : 0;
      const nc = c > 0 || S[i] === 'C' ? 1 : 0;
      const nabc = (na << 0) | (nb << 1) | (nc << 2);

      // no-cut
      {
        const ncut = cut;
        dp[ni][ncut][nabc] += dp[i][cut][abc];
      }

      // cut
      {
        if (cut < 2 && na > 0 && nb > 0 && nc > 0) {
          const na = 0;
          const nb = 0;
          const nc = 0;
          const nabc = (na << 0) | (nb << 1) | (nc << 2);
          const ncut = cut + 1;
          dp[ni][ncut][nabc] += dp[i][cut][abc];
        }
      }
    }
  }
}

console.log(dp[N][2][7].toString());
