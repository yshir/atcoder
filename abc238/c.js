const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const S = input[0];

const alpha = 998244353n;

let ans = 0n;
for (let i = 0; i < S.length - 1; i++) {
  const k = 10n ** BigInt(i);
  const l = 1n;
  const r = 9n * k;
  const n = r;
  ans += ((l + r) * n) / 2n;
  ans %= alpha;
}

const k = 10n ** BigInt(S.length - 1);
const l = 1n;
const r = BigInt(S) - (k - 1n);
const n = r;
ans += ((l + r) * n) / 2n;
ans %= alpha;

console.log(ans.toString());
