const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
const [N] = input[0].split(' ').map(Number);
const A = [];
const B = [];
for (let i = 0; i < N; i++) {
  const [x, y] = input[i + 1].split(' ').map(BigInt);
  A[i] = x;
  B[i] = y;
}

const X = Array(N)
  .fill(0)
  .map((_, i) => i);
X.sort((a, b) => {
  const v = A[b] * (A[a] + B[a]) - A[a] * (A[b] + B[b]);
  if (v === 0n) {
    return 0;
  }
  return v > 0n ? 1 : -1;
});
console.log(X.map((i) => i + 1).join(' '));
