const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const A = 998244353;

const dp = {
  emp: [1],
  a: [0],
  b: [0],
  c: [0],
};

for (let i = 0; i < S.length; i++) {
  dp.emp[i + 1] = dp.emp[i];
  dp.a[i + 1] = dp.a[i];
  dp.b[i + 1] = dp.b[i];
  dp.c[i + 1] = dp.c[i];

  if (S[i] === 'a') {
    dp.a[i + 1] += dp.emp[i] + dp.b[i] + dp.c[i];
    dp.a[i + 1] %= A;
  }
  if (S[i] === 'b') {
    dp.b[i + 1] += dp.emp[i] + dp.a[i] + dp.c[i];
    dp.b[i + 1] %= A;
  }
  if (S[i] === 'c') {
    dp.c[i + 1] += dp.emp[i] + dp.b[i] + dp.a[i];
    dp.c[i + 1] %= A;
  }
}

let ans = 0;
ans += dp.a[dp.a.length - 1] + dp.b[dp.b.length - 1] + dp.c[dp.c.length - 1];
ans %= A;
console.log(ans);
