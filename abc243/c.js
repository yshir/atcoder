const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  A[i] = input[i + 1].split(' ').map(Number);
}
const S = input[N + 1];

const L = {};
const R = {};
for (let i = 0; i < N; i++) {
  const [x, y] = A[i];
  if (S[i] === 'R') {
    R[y] = R[y] === undefined ? x : Math.min(R[y], x);
  } else {
    L[y] = L[y] === undefined ? x : Math.max(L[y], x);
  }
}

for (const k in R) {
  const r = R[k];
  const l = L[k];
  if (l === undefined) continue;
  if (r < l) {
    console.log('Yes');
    return;
  }
}
console.log('No');
