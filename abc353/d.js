const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(BigInt);
const M = 998244353n;

const map = {};
for (let i = 0; i < N; i++) {
  const d = String(A[i]).length;
  map[d] = map[d] || { cnt: 0n, sum: 0n };
  map[d].cnt += 1n;
  map[d].sum += A[i];
  map[d].sum %= M;
}

let ans = 0n;

for (let i = 0; i < N; i++) {
  const d = String(A[i]).length;
  map[d].cnt -= 1n;
  map[d].sum = (map[d].sum + M - A[i]) % M;
  for (let d2 = 1; d2 <= 10; d2++) {
    if (map[d2] !== undefined && map[d2].cnt > 0n) {
      ans += 10n ** BigInt(d2) * A[i] * map[d2].cnt;
      ans += map[d2].sum;
      ans %= M;
    }
  }
}

console.log(ans.toString());
