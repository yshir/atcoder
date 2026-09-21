const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(BigInt);

let l = 1n;
let r = 10n ** 18n;
let c1, c2;

const f = (g) => {
  return Number(A) / Math.sqrt(Number(g)) + (Number(g) - 1) * Number(B);
};

while (r - l > 2n) {
  c1 = (l * 2n + r) / 3n;
  c2 = (l + r * 2n) / 3n;
  if (f(c1) < f(c2)) {
    r = c2;
  } else {
    l = c1;
  }
}

console.log(Math.min(f(l), f((l + r) / 2n), f(r)));
