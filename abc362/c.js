const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);

const L = [];
const R = [];
for (let i = 0; i < N; i++) {
  const [ll, rr] = input[i + 1].split(' ').map(BigInt);
  L[i] = ll;
  R[i] = rr;
}

const A = [];
let sum = 0n;
for (let i = 0; i < N; i++) {
  A[i] = L[i];
  sum += L[i];
}

if (sum > 0n) {
  console.log('No');
  return;
}

for (let i = 0; i < N; i++) {
  if (sum + R[i] - A[i] < 0) {
    sum += R[i] - A[i];
    A[i] = R[i];
  } else {
    A[i] += 0n - sum;
    sum = 0n;
    break;
  }
}

if (sum === 0n) {
  console.log('Yes');
  console.log(A.map((x) => x.toString()).join(' '));
} else {
  console.log('No');
}
