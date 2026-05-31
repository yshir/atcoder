let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [T] = input[line++].split(' ').map(Number);

const MOD = 998244353n;

function gcd_b(a, b) {
  if (a < 0n) a = -a;
  if (b < 0n) b = -b;
  while (b > 0n) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

function min_b(a, b) {
  return a > b ? b : a;
}

while (T--) {
  const [N, M] = input[line++].split(' ').map(BigInt);

  let ans = 0n;
  for (let d = 1; ; d++) {
    const min_y = 10n ** BigInt(d - 1);
    const max_y = min_b(10n ** BigInt(d) - 1n, N);
    if (min_y > N) break;

    const g = gcd_b(10n ** BigInt(d) - 1n, M);
    ans = (ans + (N / (M / g)) * (max_y - min_y + 1n)) % MOD;
  }
  console.log(ans.toString());
}
