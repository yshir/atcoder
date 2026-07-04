const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M, K] = input[0].split(' ').map(BigInt);

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

const lcm = (N * M) / gcd(N, M);

const f = (x) => {
  let cnt = 0n;
  cnt += x / N;
  cnt += x / M;
  cnt -= (x / lcm) * 2n;
  return cnt < K;
};

let l = 0n;
let r = N * M * K;
let m;
while (r - l > 1) {
  m = (l + r) / 2n;
  if (f(m)) {
    l = m;
  } else {
    r = m;
  }
}

console.log(r.toString());
