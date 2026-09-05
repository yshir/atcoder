const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [K] = input[0].split(' ').map(BigInt);

function gcd(a, b) {
  if (a < 0n) a = -a;
  if (b < 0n) b = -b;
  while (b > 0n) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}

let rem = K;
const max = BigInt(1e6 * 2);

for (let i = 1n; i <= max; i += 1n) {
  rem /= gcd(rem, i);
  if (rem === 1n) {
    console.log(i.toString());
    return;
  }
}

console.log(rem.toString());
