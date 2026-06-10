const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(BigInt);

const MOD = 998244353n;

let ans = 0n;

for (let d = 0n; d <= 60n; d++) {
  if (((M >> d) & 1n) === 1n) {
    const p = 2n ** (d + 1n);
    const c = (N + 1n) / p;
    const ph = 2n ** d;
    ans = (ans + c * ph) % MOD;
    const r = N + 1n - p * c;
    if (r > ph) ans = (ans + r - ph) % MOD;
  }
}

console.log(ans.toString());
