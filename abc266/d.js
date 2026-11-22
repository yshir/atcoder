const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const S = [];
for (let i = 0; i < N; i++) {
  S[i] = input[i + 1].split(' ').map(Number);
}

const map = new Map();
for (let i = 0; i < N; i++) {
  const [t, x, a] = S[i];
  map.set(t, [x, BigInt(a)]);
}

const INF = 10n ** 15n;

const max = (a, b) => (a < b ? b : a);

const T = 1e5;

const dp = [];
for (let i = 0; i <= T; i++) {
  dp[i] = [];
  for (let j = 0; j <= 4; j++) {
    dp[i][j] = -INF;
  }
}
dp[0][0] = 0n;

for (let t = 1; t <= T; t++) {
  const i = t - 1;
  const ni = t;

  let x = 0;
  let a = 0n;
  if (map.has(t)) {
    x = map.get(t)[0];
    a = map.get(t)[1];
  }

  for (let j = 0; j <= 4; j++) {
    // left
    {
      const nj = j - 1;
      const nv = nj === x ? a : 0n;
      if (nj >= 0) dp[ni][nj] = max(dp[ni][nj], dp[i][j] + nv);
    }
    // no-move
    {
      const nj = j;
      const nv = nj === x ? a : 0n;
      dp[ni][nj] = max(dp[ni][nj], dp[i][j] + nv);
    }
    // right
    {
      const nj = j + 1;
      const nv = nj === x ? a : 0n;
      if (nj <= 4) dp[ni][nj] = max(dp[ni][nj], dp[i][j] + nv);
    }
  }
}

let ans = 0n;
for (const v of dp[T]) {
  ans = max(ans, v);
}
console.log(ans.toString());
