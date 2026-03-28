const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const base = [];
for (let i = 0; i < 10; i++) {
  base[i] = [];
}

for (let i = 0; ; i++) {
  const val = 1 << i;
  const len = val.toString().length;
  if (len > 9) {
    break;
  }
  base[len].push(val);
}

const dp = [[0]];

const f = (n) => {
  dp[n] = [];
  for (let i = 0; i < n; i++) {
    const a = dp[i];
    const b = base[n - i];
    for (const a_ of a) {
      for (const b_ of b) {
        dp[n].push(Number(`${a_}${b_}`));
      }
    }
  }
};

for (let i = 1; i <= 9; i++) {
  f(i);
}

console.log([...new Set(dp.flat())].sort((a, b) => a - b)[N]);
