const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, M] = input[0].split(' ').map(BigInt);
const A = input[1].split(' ').map(BigInt);

if (A.reduce((a, b) => a + b, 0n) <= M) {
  console.log('infinite');
  return;
}

const f = (x) => {
  let sum = 0n;
  for (let i = 0; i < N; i++) {
    sum += A[i] > x ? x : A[i];
  }
  return sum <= M;
};

const max = 2n * 10n ** 14n;
let l = 0n;
let r = max + 1n;
let m;
while (l <= r) {
  m = (l + r) / 2n;
  if (f(m)) {
    l = m + 1n;
  } else {
    r = m - 1n;
  }
}

console.log((l - 1n).toString());
