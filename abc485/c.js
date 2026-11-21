const input = require('fs').readFileSync(0, 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const C = input[1].split(' ').map(Number);

const INF = 3 * 1e6;

const A = [];
for (let i = 0; i < N; i++) A[i] = undefined;

for (let i = 0; i < N; i++) {
  if (i > 0 && C[i - 1] !== C[i]) A[i] = 1;
  if (i < N - 1 && C[i] !== C[i + 1]) A[i] = 1;
}

const L = [...A];
const R = [...A];

for (let i = 1; i < N; i++) {
  if (L[i - 1] !== undefined && L[i] === undefined) L[i] = L[i - 1] + 1;
}
for (let i = N - 2; i >= 0; i--) {
  if (R[i + 1] !== undefined && R[i] === undefined) R[i] = R[i + 1] + 1;
}

const B = [];
for (let i = 0; i < N; i++) {
  let min = INF;
  if (L[i] !== undefined) min = Math.min(min, L[i]);
  if (R[i] !== undefined) min = Math.min(min, R[i]);
  B[i] = min;
}
console.log(B.join(' '));
