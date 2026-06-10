const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [Q] = input[0].split(' ').map(Number);

const isqrt = (num) => {
  if (num < 0n) return 0;
  if (num < 2n) return num;
  let x = num / 2n;
  while (true) {
    const y = (x + num / x) / 2n;
    if (y >= x) return x;
    x = y;
  }
};

Math.sqrt(2n);

const ans = [];
for (let i = 0; i < Q; i++) {
  const [c, d] = input[i + 1].split(' ').map(BigInt);

  const kl = String(c).length;
  const kr = String(c + d).length;

  let cur = 0n;
  for (let k = kl; k <= kr; k++) {
    const l = k === kl ? BigInt(String(c) + String(c)) : BigInt(String(c) + String(10n ** BigInt(k - 1)));
    const r = k === kr ? BigInt(String(c) + String(c + d)) : BigInt(String(c) + String(10n ** BigInt(k) - 1n));
    cur += isqrt(r) - isqrt(l - 1n);
  }
  ans.push(cur.toString());
}
console.log(ans.join('\n'));
