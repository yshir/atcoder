const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [L, R, D, U] = input[0].split(' ').map(Number);

let cnt = 0n;

// |x| <= |y|
for (let y = D; y <= U; y++) {
  if (y % 2 === 0) {
    const nl = Math.max(L, -Math.abs(y));
    const nr = Math.min(R, Math.abs(y));
    if (nl <= nr) {
      cnt += BigInt(nr - nl + 1);
    }
  }
}

// |x| > |y|
for (let x = L; x <= R; x++) {
  if (x % 2 === 0) {
    const nu = Math.min(U, Math.abs(x) - 1);
    const nd = Math.max(D, -Math.abs(x) + 1);
    if (nd <= nu) {
      cnt += BigInt(nu - nd + 1);
    }
  }
}
