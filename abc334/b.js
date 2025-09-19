const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
let [A, M, L, R] = input[0].split(' ').map(BigInt);

L -= A;
R -= A;

if (L <= 0) {
  const d = (-L + 1n) * M;
  L += d;
  R += d;
}

const ll = (L - 1n) / M + 1n;
const rr = R / M + 1n;
console.log((rr - ll).toString());
