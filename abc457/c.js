let line = 0;
const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N, K] = input[line++].split(' ').map(Number);
const A = [];
for (let i = 0; i < N; i++) {
  const [l, ...x] = input[line++].split(' ').map(Number);
  A[i] = x;
}
const C = input[line++].split(' ').map(Number);

const L = [];
for (let i = 0; i < N; i++) {
  L[i] = C[i] * A[i].length;
}
for (let i = 1; i < N; i++) {
  L[i] += L[i - 1];
}

for (let i = 0; i < N; i++) {
  if (K <= L[i]) {
    const prev = i > 0 ? L[i - 1] : 0;
    const idx_2 = K - prev;
    const idx = idx_2 % A[i].length;
    if (idx === 0) {
      console.log(A[i][A[i].length - 1]);
    } else {
      console.log(A[i][idx - 1]);
    }
    break;
  }
}
