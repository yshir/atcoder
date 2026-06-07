const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [a, b, c] = input[0].split(' ').map(BigInt);

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

const r = gcd_b(a, gcd_b(b, c));

console.log((a / r - 1n + (b / r - 1n) + (c / r - 1n)).toString());
