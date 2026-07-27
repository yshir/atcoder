const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [A, B] = input[0].split(' ').map(BigInt);

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

function lcm_b(a, b) {
  return (a / gcd_b(a, b)) * b;
}

const INF = BigInt(1e9) ** 2n;
const ans = lcm_b(A, B);
console.log(ans > INF ? 'Large' : ans.toString());
