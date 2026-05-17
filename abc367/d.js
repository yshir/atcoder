const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(Number);
const A = input[1].split(' ').map(Number);

const L = A.reduce((a, b) => a + b, 0);
const L_mod = L % M;

let ans = 0;

const map = {};
const acc = [];
for (let i = 0; i < N; i++) {
  const r = (acc[i - 1] || 0) + (A[i - 1] || 0);

  const r_mod = r % M;
  const rL_mod = (r - L_mod + M) % M;

  ans += map[r_mod] || 0;
  ans += map[rL_mod] || 0;

  acc[i] = r;
  map[r_mod] = (map[r_mod] || 0) + 1;
}

console.log(ans);
